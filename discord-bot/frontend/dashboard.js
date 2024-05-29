const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Dashboard bot is ready!');
});

client.login('your-token-goes-here');