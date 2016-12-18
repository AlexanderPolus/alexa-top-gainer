//strict mode - http://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
'use strict'; 

// what module.exports does: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
module.exports.topGainer = (event, context, callback) => {
  const response = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: 'Here\'s some text.'
      }
    }
  }

  callback(null, response)

}