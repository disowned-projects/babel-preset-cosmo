module.exports = () => ({
  presets: [
    require("@babel/preset-env").default,
    require("@babel/preset-flow").default
  ],

  plugins: [
    require("@babel/plugin-transform-destructuring").default,
    require("@babel/plugin-proposal-class-properties").default,

    [
      require("@babel/plugin-transform-runtime").default,
      {
        helpers: false,
        polyfill: false,
        regenerator: true
      }
    ],

    [
      require("@babel/plugin-proposal-object-rest-spread").default,
      {
        useBuiltIns: true
      }
    ]
  ]
});
