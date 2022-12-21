# 学习 CI/CD

## CI

### 添加 eslint

1. npm init @eslint/config
   命令行执行`npm init @eslint/config`后会通过交互式提问初始化 eslint
   初始化好之后会添加 eslint 的配置文件和安装对应的依赖
   npm run start 之后，会发现很多报错
   - string must use single quote
     使用 prettier 自动格式化
   - missing space between parentheses
     使用 prettier 自动格式化
   - 'React' must be in scope when using JSX
     在 eslint 的配置文件中，extends "plugin:react/jsx-runtime"
   - Extra semicolon
     使用 prettier 自动格式化
2. 社区各版本之间的规则
   ![airbnb vs standard](https://cloud.tencent.com/developer/article/1704833?from=15425)
3. 添加 script
   "lint:js": "eslint --cache --ext .js,.jsx,.ts,.tsx ./src",
   2.1 自动化测试文件中全局注入的方法会报错
   为什么要全局注入 test，expect 等方法，怎么注入的？
   怎么让 eslint 跳过检测？
   ![eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)

### 添加 prettier

1. 添加 prettier 配置文件
2. 配置 prettier 规则
   https://prettier.io/docs/en/configuration.html
3. 通过 vscode 自动化格式化
4. 通过 prettier cli 格式化
   npm install --save-dev --save-exact prettier
   echo {}> .prettierrc.json
   touch .prettierignore
   npx prettier --write .
   或者添加 script "lint:prettier": "prettier --write \"src/\*_/_\""

5. eslint-config-prettier 解决 eslint 和 prttier 冲突
   ![eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation)

### 添加 styleLint

1. Getting started
   https://stylelint.io/user-guide/get-started
