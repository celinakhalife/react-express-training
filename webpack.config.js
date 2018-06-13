module.exports = options => {
    return {
        entry: './src/index.js',
        output: {
            path: __dirname + '/build',
            filename: './bundle.js',
        },
        module: {
            rules: [
              {
                test: /.js$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      cacheDirectory: true,
                    },
                  },
                ],
              },
              {
                test: /.css$/,
                use: [
                    'style-loader',
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true
                      }
                    }
                  ]
              },
              {
                test: /.svg$/,
                use: [
                    {
                      loader: 'react-svg-loader'
                    }
                  ]
              }
            ],
          },
        }
      }
