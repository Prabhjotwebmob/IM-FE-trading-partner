const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const webpack = require('webpack');
module.exports = new withModuleFederationPlugin({
  name: 'trading-partner',

  exposes: {
    './Module': './src/app/trading-partner/trading-partner.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
})
// module.exports = {
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         captcha_key : JSON.stringify(process.env.captcha_key),
//         firebase_apiKey : JSON.stringify(process.env.firebase_apiKey),
//         firebase_authDomain : JSON.stringify(process.env.firebase_authDomain),
//         firebase_databaseURL : JSON.stringify(process.env.firebase_databaseURL),
//         firebase_projectId : JSON.stringify(process.env.firebase_projectId),
//         firebase_storageBucket : JSON.stringify(process.env.firebase_storageBucket),
//         firebase_messagingSenderId : JSON.stringify(process.env.firebase_messagingSenderId),
//         firebase_appId : JSON.stringify(process.env.firebase_appId),
//         firebase_measurementId : JSON.stringify(process.env.firebase_measurementId)
//       },
//       name: 'trading-partner',

//       exposes: {
//         './Module': './src/app/IM-FE-trading-partner/IM-FE-trading-partner.module.ts',
//       },

//       shared: {
//         ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
//       },
//     })
//   ]
// }