# 参考文档

[参考网站](https://juejin.cn/post/6951649464637636622#heading-5)

## 主要过程

1. yarn create @vitejs/app
2. 项目名称 vue3-demo 模板选择 typeScript
3. yarn & yarn dev 进行启动
4. 替换 vite.config.ts
5. 安装路由： yarn add vue-router@4 在 src 下建立 router 文件夹并对应更改 main.ts
6. 安装 vuex：yarn add vuex@next 在 src 下简历 store 文件夹并对应更改 main.ts
7. 安装 elementUI-plus: yarn add element-plus
8. 安装 Axios: yarn add axios, 在 src/utils 下简历 axios 的请求文件
9. 安装样式: yarn add stylus | yarn add sass;
10. 配置.editorconfig | .prettierrc 和 eslint
11. 安装插件 EditorConfig for VS Code | Prettier - Code formatter
12. 安装 eslint 的配置；npx eslint --init

# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
