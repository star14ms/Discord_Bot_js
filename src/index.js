import * as register from './register.js';
import { Client, Intents } from 'discord.js';
import { execute_commands } from './commands.js';
import { TOKEN } from './_constants.js';


const client = new Client({ intents: [
  Intents.FLAGS.GUILD_MESSAGES, // 추가했더니 messageCreate도 실행되기 시작
  Intents.FLAGS.GUILDS
] });


client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  execute_commands(interaction)
});

client.on('messageCreate', async message => {
  console.log(message.content)
})

client.login(TOKEN);