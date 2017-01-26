module.exports = {
  entry: './app/app.jsx', //fajl koji webpack učitava
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
        Main: 'app/components/Main.jsx',
        Nav: 'app/components/Nav.jsx',
        Weather: 'app/components/Weather.jsx',
        WeatherForm: 'app/components/WeatherForm.jsx',
        WeatherMessage: 'app/components/WeatherMessage.jsx',
        About: 'app/components/About.jsx',
        Examples: 'app/components/Examples.jsx',
        openWeatherMap: 'app/API/openWeatherMap.jsx'



    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [ //loader služi da bi webpack znao šta da radi sa fajom
       {
         loader: 'babel-loader', //loader
         query: {
           presets: ['react', 'es2015'] //kompajlira react
         },
         test: /\.jsx?$/, //ovde kažemo da traži fajlove sa jsx ekstenzijom
         exclude: /(node_modules|bower_components)/ //isključimo foldere koji nam ne trebaju
       }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
