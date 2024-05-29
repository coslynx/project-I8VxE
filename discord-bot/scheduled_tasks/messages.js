discord-bot/scheduled_tasks/messages.js:

const schedule = require('node-schedule');

module.exports = {
    scheduleMessages: () => {
        schedule.scheduleJob('*/5 * * * *', () => {
            // Logic to send scheduled messages every 5 minutes
        });
    },
};