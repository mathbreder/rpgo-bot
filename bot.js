const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  } else if (msg.content === "roll d20") {
      msg.reply(Math.trunc((Math.random() * Math.sin(Math.random()) * 1000) % 20));
  }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
