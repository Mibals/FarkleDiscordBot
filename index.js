const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

// Environment variables
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;

// Bot ready event
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Message event
client.on('messageCreate', async message => {
  if (message.author.bot) return;
  
  if (message.content === '!ping') {
    await message.reply('Pong!');
  }
});

// Error handling
client.on('error', error => {
  console.error('Discord client error:', error);
});

// Login
client.login(token);