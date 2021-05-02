/*
 * @Author: gm.chen
 * @Date: 2021-05-02 22:55:08
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-05-02 23:31:31
 * @Description: file content
 * @FilePath: /vue3-demo/.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {}
}
