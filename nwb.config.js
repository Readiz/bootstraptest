module.exports = {
  type: 'react-app',
  webpack: {
    extra: {
      entry: './src/index',
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      module: {
        rules: [{test: /\.tsx$/, loader: 'ts-loader'}],
      },
    },
  },
}
