# 升级 typescript

1. 安装对应的依赖

```bash
 npm i typescript @types/react @types/react-dom @types/node @types/jest
```

2. 设置 tsconfig.json
   在别的地方，使用 npx create-react-app cra-ts --template typescript 生成一个 ts 羡慕，然后把 tsconfig.json 拷贝过来就好了

3. 在 src 下面新建 react-app-env.d.ts

```ts
import 'react-scripts'
```

4. 修改 eslint 配置
   4.1 安装依赖

```bash

npm install eslint-config-standard-with-typescript --save-dev

npm uninstall eslint-config-standard

```

4.2 修改配置

```js
extends: [
   ...
   'standard-with-typescript',
],

 parserOptions: {
   ...
    project: ['tsconfig.json'],
  },

```

5. Enforce consistent usage of type imports.

🌰

```ts
import { Foo } from 'Foo' // wrong
import type { Foo } from 'Foo' // right
```

修改 eslint 配置

```js
 parser: '@typescript-eslint/parser',

 rules: {
   ...
    // 最后一个import之后需要有一个空行
    'import/newline-after-import': 2,
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': ['error'],
  },

```
