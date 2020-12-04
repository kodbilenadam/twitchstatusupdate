const request = require('request');

async function getToken(callback) {
 const options = {
     url: `https://id.twitch.tv/oauth2/token`,
     json: true,
     body: {
         client_id: 'oefylc3y5rhqyi790doo43aiwznosp',
         client_secret: '5obte9ycqd40lrun7m3glqfbd50vzt',
         grant_type: 'client_credentials'
     }
 };

 request.post(options, (err,res,body) => {
     if(err) return console.log(err)

     callback(res.body.access_token);
 });
}


async function tokengel() {
 var tokencik = await new Promise((resolve, reject) => {
  getToken((res) => {
  resolve(res)
  console.log(res);
})
});
}
tokengel()

