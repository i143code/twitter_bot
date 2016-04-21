var Twit = require('twit')
console.log("runnign server");


var T = new Twit({
  consumer_key:         'azy4GYCXD0iUavi7Uf71uVqzD',
  consumer_secret:      'bvIAUAxW0rfmki7pFyV1l7mOol7qN5H7sMcDEo1xkJiMoYnFvL',
  access_token:         '722966957700485120-157q4UaM51SSRHlthkwbvt0E33lFPGm',
  access_token_secret:  'Uf7gmLjfwVM3mbZZWpjvbtmoWQUpmyFYEmKY4d6ly8IFf',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
// hi i am ashish bot 
T.post('statuses/update', { status: 'Hi, I am learning how to make a bot using twiiter apis and my server is tweeting this :)' }, function(err, data, response) {
  console.log(data)
})
