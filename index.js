var Twit = require('twit')
var stream = require('stream');

console.log("runnign server");
//twitter config
var twitter = require('./twitter');

var T = new Twit(twitter);

var tweet = { status: "Hello , I am a bot!!" };

// a simple post request
T.post('statuses/update',tweet, gotData );

//a function
function gotData(err, data, response){
	
       console.log(data);
}

// two tweet with rainbow keywords
var tweet1 = { q: 'rainbow', count: 1 };


//make a simple get request
// T.get('search/tweets',tweet1, gotData);


//call the function
// tweetit();

//setinterval to tweet after 10 sec 
// setInterval(tweetit, 1000*10);

//function tweet it in interval

function tweetit(){
//create a random number 
var r = Math.floor(Math.random()*99)
var tweet = { status: "Hello , I am a bot!!" + r +"i am posting status for testing!!" };

// a simple post request
T.post('statuses/update',tweet, gotData );

//a function
function gotData(err, data, response){
       // console.log(data);
       if(err){
       	console.log(err);
       }

       console.log("It worked!!");
    }
}


var stream = T.stream('user');

// Anytime someone follows me
stream.on('follow', followed);


function followed(eventMsg){
    //tweet at them
    var name = eventMsg.source.name;
    var screename = eventMsg.source.screen_name;
    //calling the followme function 
    follweme('.@'+ screename +"Thank you following me!!");
}


function follweme(text){
//tweet the text
var tweet = { status: text 
console.log(text);
};

// a simple post request
T.post('statuses/update',tweet, gotData );

//a function
function gotData(err, data, response){
       // console.log(data);
       if(err){
       	console.log(err);
       }

       console.log("followed the user!!");
    }






}







