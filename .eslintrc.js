module.exports = {
  root: true,
  env: {
    es6: true, // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
    node: true, // Node.js 全局变量和 Node.js 作用域
    browser: true, // 浏览器全局变量
    jquery: true // jQuery 全局变量
    // vue:true,
    // html: true, //

  },
  plugins: [
    'html' // 此插件用来识别.html 和 .vue文件中的js代码
  ],
  globals: {
    template: false, // false 不允许被重写
    _util: false
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 6, // 支持es6语法，但并不意味着同时支持新的 ES6 全局变量或类型（比如 Set 等新类型）
    sourceType: 'module', // 指定来源的类型，"script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    ecmaFeatures: {

      jsx: true, // 启用 JSX
      globalReturn: true, // 允许在全局作用域下使用 return 语句

      impliedStrict: true, // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
      experimentalObjectRestSpread: true // 启用实验性的 object rest/spread properties 支持。(重要：这是一个实验性的功能,在未来可能会有明显改变。 建议你写的规则 不要 依赖该功能，除非当它发生改变时你愿意承担维护成本。)

    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // "no-irregular-whitespace": "off",
    indent: ['off', 2],
    semi: 0,
      // indent: [2, 4], // 强制使用一致的缩进
      eqeqeq: [2, 'always'], // 要求使用 === 和 !==
      quotes: [2, 'single'] // 强制使用一致的反勾号、双引号或单引号

  }
}
