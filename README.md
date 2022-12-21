



# react 学习

### react基础试用

### react-router

### redux

### react + and

## 工程化

### eslint

1. 初始化

   ```bash
   npm init @eslint/config
   ```

2. 社区各版本之间的规则

   [airbnb vs stadard](https://cloud.tencent.com/developer/article/1704833?from=15425)

3. 添加npm script

   ```js
   "lint:js": "eslint --cache --ext .js,.jsx,.ts,.tsx ./src",
   ```

4. Eslint如何不跳过jest全局注册的方法

   ```bash
   npm install eslint-plugin-jest --save-dev
   
   // eslint config
   env: {
   	'jest/globals': true,
   },
   
   plugins: ['react', 'jest'],
   ```

### prettier

1. 添加 prettier 配置文件

   ```json
   {
     "singleQuote": true,
     "trailingComma": "es5",
     "semi": false
   }
   
   ```

2. 添加prettier忽略文件

   ```text
   build
   coverage
   package-lock.json
   package.json
   *.svg
   ```

3. 通过 vscode 自动化格式化

4. 通过 prettier cli 格式化

   ```bash
   npm install --save-dev --save-exact prettier
   echo {}> .prettierrc.json
   touch .prettierignore
   npx prettier --write .
   ```

5. eslint-config-prettier 解决 eslint 和 prttier 冲突

   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation)

###  stylelint

1. 安装

   ```bash
   npm install stylelint stylelint-config-prettier-scss stylelint-config-standard-scss
   
   "lint:style": "stylelint \"**/*.{css,scss}\"",
   ```

   

2. 配置

   ```json
   {
     "extends": [
       "stylelint-config-standard-scss",
       "stylelint-config-prettier-scss"
     ]
   }
   ```

   

###  lint-staged

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{css,scss}": [
    "stylelint --fix"
  ]
}
```

### husky

1. 安装

   ```js
   npm install husky --save-dev
   npm pkg set scripts.prepare="husky install"
   npm run prepare
   ```

2. 添加pre-commit

   ```bash
   npx husky add .husky/pre-commit "npx lint-staged"
   git add .husky/pre-commit
   ```

## CI/CD

### CI

```yaml
name: CI
# Event设置为master分支的pull request事件，
on:
  pull_request:
    branches: master
jobs:
  # 只需要定义一个job并命名为CI
  CI:
    runs-on: ubuntu-latest
    steps:
      # 拉取项目代码
      - name: Checkout repository
        uses: actions/checkout@v2
      # 给当前环境下载node
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16.x'
      # 安装依赖
      - name: Installing Dependencies
        run: npm ci
      # 运行代码扫描
      - name: Running Lint
        # 通过前面章节定义的命令行执行代码扫描
        run: npm run lint

```

### CD

1. GitHub gh-page

```yaml
name: Build and Deploy on github page
on:
  push:
    branches:
      - master
permissions:
  contents: write
jobs:
  build-and-deploy:
    concurrency: ci-${{ github.ref }} # Recommended if you intend to make multiple deployments in quick succession.
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
        run: |
          npm ci
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: build # The folder the action should deploy.

```

2. 远程服务器

   ```yaml
   name: Build and Deploy on HOST page
   on:
     # 以主干的push事件作为触发条件
     push:
       branches: master
   jobs:
     CD:
       runs-on: ubuntu-latest
       steps:
         # 拉取代码
         - name: Checkout repository
           uses: actions/checkout@v2
         # 下载Node
         - name: Use Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '16.x'
   
         # 安装依赖。命中缓存则跳过此步
         - name: Installing Dependencies
           run: npm ci
         # 从package.json里获取version属性的值
         # 在CD Workflow中会给每个生成的制品打上标签，而标签取值于version值
         - name: Read Version
           # 读取出来的值会放在steps.[id].outputs.value供其他步骤step读取
           id: version
           uses: ashley-taylor/read-json-property-action@v1.0
           with:
             path: ./package.json
             property: version
         # 打包生成制品，且把制品压缩到assets.zip压缩包里
         - name: Building
           run: |
             npm run build
             zip -r assets ./build/**
         # 基于当前commit进行版本发布(Create a release)，tag_name是v前缀加上package.json的version值
         - name: Create GitHub Release
           # 此步骤中，版本发布后会返回对应的url，以供下面上传制品的步骤中读取使用
           id: create_release
           uses: actions/create-release@v1
           env:
             # GITHUB_TOKEN是准备工作步骤三申请的Personal Access Token
             GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}
           with:
             tag_name: v${{steps.version.outputs.value}}
             release_name: v${{steps.version.outputs.value}}
             draft: false
             prerelease: false
         # 把assets.zip上传到仓库对应的发布版本Release上
         - name: Update Release Asset
           id: upload-release-asset
           uses: actions/upload-release-asset@v1
           env:
             GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}
           with:
             upload_url: ${{ steps.create_release.outputs.upload_url }}
             asset_path: ./assets.zip
             asset_name: assets.zip
             asset_content_type: application/zip
         # 把制品上传到部署机器
         - name: Upload to Deploy Server
           uses: easingthemes/ssh-deploy@v2.0.7
           env:
             # SSH_PRIVATE_KEY为准备工作步骤三中生成密钥对里的私钥
             SSH_PRIVATE_KEY: ${{ secrets.DEPLOY_TOKEN }}
             # 指定当前目录中要上传的内容
             SOURCE: 'build/'
             # 指定上传到部署机器的哪个目录下
             TARGET: '/data/www'
             # 上传前指令，此处用于清空TARGET下的文件
             ARGS: '-avzr --delete'
             # REMOTE_HOST为机器的公网IP
             REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
             # REMOTE_USER为登录机器时用到账号名
             REMOTE_USER: ${{secrets.REMOTE_USER}}
   
   ```

   
