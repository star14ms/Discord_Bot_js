import { joinVoiceChannel, getVoiceConnection } from '@discordjs/voice';


// 커맨드 실행
export async function execute_commands(i) {
    switch (i.commandName) {
        case 'ping':
            await i.reply('Pong!'); return
        case 'join':
            await join(i); return
        case 'exit':
            await exit(i); return
    }
}

// i.member.voice.channel: <봇이 구동되기 시작할 때>의 유저가 접속해있던 채널 (상수인 듯)
// TODO: 현재 유저가 접속해있는 음성 채널 id값 찾기
async function join(i) {
    if (i.member.voice.channel) {
        console.log(i.member.voice.channel.id)
        joinVoiceChannel({
            channelId: i.member.voice.channel.id,
            guildId: i.guildId,
            adapterCreator: i.guild.voiceAdapterCreator
        })
        await i.reply('음성 채널 입장'); return
    } else {
        await i.reply('음성 채널에 먼저 들어가!'); return
    }
}


async function exit(i) {
    const connection = getVoiceConnection(i.guildId);
    if (connection != null) {
        await i.reply('음성 채널 퇴장');
        connection.destroy();
    } else {
        await i.reply('입장을 먼저 해야 퇴장도 하지!');
    }
}