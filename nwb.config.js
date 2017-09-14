module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactReduxModal',
      externals: {
        react: 'React'
      }
    }
  }
}
