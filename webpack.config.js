"use strict";

const path = require("path");

module.exports = {
  mode: "production",

  entry: {
    main: path.resolve("./src/index.js")
  },

  output: {
    filename: "app.js",
    path: path.resolve("./dist")
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};
