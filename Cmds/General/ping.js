module.exports = async (context) => {
        const { client, m, charityspeed } = context;


await m.reply(`Pong\n${charityspeed.toFixed(4)}ms`)

}
