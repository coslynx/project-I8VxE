discord-bot/src/moderation/logging.js:

const fs = require('fs');

const logUserAction = (userId, action) => {
  const logEntry = `${new Date().toISOString()} - User ${userId}: ${action}\n`;
  fs.appendFile('user_actions.log', logEntry, (err) => {
    if (err) {
      console.error('Error logging user action:', err);
    }
  });
};

const logWarning = (userId, reason) => {
  logUserAction(userId, `Warning - Reason: ${reason}`);
};

const logKick = (userId, reason) => {
  logUserAction(userId, `Kicked - Reason: ${reason}`);
};

const logBan = (userId, reason) => {
  logUserAction(userId, `Banned - Reason: ${reason}`);
};

const logMute = (userId, reason) => {
  logUserAction(userId, `Muted - Reason: ${reason}`);
};

const searchLogs = (query) => {
  fs.readFile('user_actions.log', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading log file:', err);
    } else {
      const logs = data.split('\n');
      const results = logs.filter((log) => log.includes(query));
      console.log(results);
    }
  });
};

module.exports = { logWarning, logKick, logBan, logMute, searchLogs };