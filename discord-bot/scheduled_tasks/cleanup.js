const schedule = require('node-schedule');
const Discord = require('discord.js');

const client = new Discord.Client();
client.login('your-bot-token');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    // Schedule cleanup task
    schedule.scheduleJob('0 0 * * *', () => {
        cleanupTask();
    });
});

function cleanupTask() {
    // Add your cleanup logic here
    console.log('Running scheduled cleanup task...');
}