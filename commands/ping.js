module.exports = {
    name: "ping",
    category: "Information",
    aliases: ["ping"],
    cooldown: 2,
    usage: "ping",
    description: "Gives you information on how fast the Bot can respond to you",
    run: async (client, message, args, user, text, prefix) => {
    let repl = ["Pong!", "Pang.", "What are you doing?", "Peng", "U-Uh... h-hi", "W-Was I fast enough?"]
        let result = Math.floor((Math.random() * repl.length));
        var ping = Date.now() - message.createdTimestamp
        if (ping > 500){ let p = "MTF"; message.channel.send(`:mega: *${repl[result]}* - My ping: **${ping}** ms (${p})`)}
        if (ping < 500){ let p = "Nice! <:ndaktau:831494322901352498>"; message.channel.send(`:mega: *${repl[result]}* - My ping: **${ping}** ms (${p})`)}
        
    }}