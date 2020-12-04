const request = require('request');


request({
 url: 'https://api.twitch.tv/helix/webhooks/hub',
 method: 'POST',
 headers: {
     'Client-ID': 'oefylc3y5rhqyi790doo43aiwznosp',
     'Content-Type': 'application/json',
     'Authorization':'Bearer poknzu5j6za3nbm3ytbdi4acggk04v'
 },
 form: {
     'hub.callback': 'https://98959f2ee539.ngrok.io/twitch/webhook',
     'hub.mode': 'subscribe',
     'hub.topic': 'https://api.twitch.tv/helix/moderation/banned/events?broadcaster_id=47417126&first=1',
     'hub.lease_seconds': 864000,
     'hub.secret': "5obte9ycqd40lrun7m3glqfbd50vzt"
 },
 json: true
}, (err, res, body) => {
 if(err) console.log(err)
 console.log(res)
});