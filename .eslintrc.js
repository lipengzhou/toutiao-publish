/**
 * ESLint 代码规范校验工具的配置文件
 * 注意：该文件如果修改必须重启才能生效
 */

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 自定义代码校验规范
  rules: {
    // process.env.NODE_ENV === 'production' 可以用来判定代码运行的环境
    // 我们开发的时候是这样的：npm run serve 启动开发模式
    // 将来代码开发好了要发布部署到线上：npm run build 构建生产环境（发布环境）运行的代码
    // process.env.NODE_ENV 有两种值
    //    production   生产环境
    //    development  开发环境
    //
    // no-console 是不允许代码中出现 console.xxx 之类的代码，例如 console.log
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off' // 关闭这个规则验证
    // 'semi': ['error', 'always']
  }
}
