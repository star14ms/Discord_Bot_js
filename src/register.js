import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { CLIENT_ID, SERVER_ID, TOKEN } from './_constants.js';


// 커맨드 설명
const commands = [{
  name: 'ping',
  description: 'Replies with Pong!'
},{
  name: 'join',
  description: '음성 채널 입장'
},{
  name: 'exit',
  description: '음성 채널 퇴장'
}
];

const rest = new REST({ version: '9' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, SERVER_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();