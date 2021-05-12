const fs = require("fs")
const { Client, Util, MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
const client = new Discord.Client()
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
require("dotenv").config();
require("./server.js")
const axios = require("axios")
const fetch = require("node-fetch")
const superagent = require("superagent")
const morse = require("morse-node").create("ITU")
var owner = "695817459206324265"
const dF = require('dateformat')
dF('dd-mm-yyyy')
var now = new Date()
let nw = dF(now, "DD-MM-YYYY")
const guild = '695851369277685760'
//-----------HANDLER Boi ------------//
//----------------------------------//
const bot = new Client({
    disableMentions: "none"
});
const PREFIX = process.env.PREFIX;
const youtube = new YouTube(process.env.YTAPI_KEY);
const queue = new Map();

bot.on("warn", console.warn);
bot.on("error", console.error);
const getapp = (guild) => {
  const app = bot.api.applications(bot.user.id)
  if (guild) {
    app.guilds(guild)
  }
  return app
}
bot.on("ready", async () => {
  console.log(`[READY] ${bot.user.tag} has been successfully booted up!`)

 bot.user.setPresence({
        status: 'mobile',
        activity: {
            name: "How to make slash command",
            type: "WATCHING"
        }
    })})
/*bot.user.setActivity("bit.ly/faris0520w", {
  type: "PLAYING"
})*/
bot.on("shardDisconnect", (event, id) => console.log(`[SHARD] Shard ${id} disconnected (${event.code}) ${event}, trying to reconnect...`));
bot.on("shardReconnecting", (id) => console.log(`[SHARD] Shard ${id} reconnecting...`));

// prevent force disconnect affecting to guild queue
bot.on("voiceStateUpdate", (mold, mnew) => {
	if( !mold.channelID) return;
	if( !mnew.channelID && bot.user.id == mold.id ) {
		 const serverQueue = queue.get(mold.guild.id);
		 if(serverQueue)  queue.delete(mold.guild.id);
	} ;
})
bot.on("message", async   (message) => { 
    // eslint-disable-line
  if (message.content === "test"){
    message.react("<:ndaktau:831494322901352498>")
  }
  if (message.content === "spi" || message.content === "spi :eugh:" || message.content === "spi <:eugh:831477683426295811>"){
    message.react("<:patk3:727906033061855232>")
    message.react("<:eugh:831477683426295811>")
  }
  if (message.content === "sepi"){
    message.react('<:eugh:831477683426295811>')
  }
  if (message.content === "<:eugh:831477683426295811>"){
    message.react("<:ndaktau:831494322901352498>") 
  }
    if (message.author.bot) return;

   const args = message.content.split(" ");
    const searchString = args.slice(1).join(" "); 
    const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
    const serverQueue = queue.get(message.guild.id);
let color = "BLUE"
    let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(PREFIX.length);
    // Chatbot desu
    if (message.channel.id === '827581906140528660' || message.channel.id === "830950242030977034" || message.channel.id === "831383137967276084" || message.channel.id === "831390930035802113") {
    
       const pesan = await fetch(
            `https://api.udit.gq/api/chatbot?message=${args}&gender=male&name=${message.author.username}`)
            .then(response => response.json())
            .then(data => data.message)
      message.channel.send(pesan)
        }
  // ------------------- OTHER COMMANDS -----------------------//
        if (!message.content.startsWith(PREFIX)) return;
 if (command === "w" | command === "waifu"){
    const adios = require('axios').default;

var options = {
  method: 'GET',
  url: 'https://animu.p.rapidapi.com/waifu',
  headers: {
    auth: '31186a66bedaf8cec5709cb65daedf71806890645fe8',
    'x-rapidapi-key': '8c4189ecbamsha08a1ccd63b8c39p1a40b3jsnd160b540e4cf',
    'x-rapidapi-host': 'animu.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  var data = response.data
  var p = new MessageEmbed()
        .setColor('BLUE')
        .setImage(data.images[0])
        .setAuthor(data.names.en)
        .setDescription(`${data.names.jp}\n${data.from.name}\n\n---------------\n:star: : ${data.statistics.fav}\n:heart: : ${data.statistics.love}\n:arrow_up: : ${data.statistics.upvote}\n:arrow_down: : ${data.statistics.downvote}`)
          message.channel.send(p)
}).catch(function (error) {
	console.error(error)
  message.channel.send(error);
});
      message.channel.send('axios error ngab <:ndaktau:831494322901352498>')   
      message.channel.send()
        }
  if (command === "meme"){
    const randomPuppy = require("random-puppy")
    const subReddits = ["meme", "dankmeme", "indonesia"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
  
        message.channel.send(memeEmbed);
  }
  if (command === "stats"){
 const { platform, arch, cpus } = require('os')
const now = require('performance-now')  
const dateFormats = require('dateformat')
dateFormats('dddd, mmmm dS, yyyy, h:MM:ss TT');
const model = cpus()[0].model + " " + arch()
     let end = now();
   let milliseconds = parseInt((client.uptime % 1000) / 100),
    seconds = parseInt((client.uptime / 1000) % 60),
    minutes = parseInt((client.uptime / (1000 * 60)) % 60),
    hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);
   hours = (hours < 10) ? "0" + hours : hours;
   minutes = (minutes < 10) ? "0" + minutes : minutes;
   seconds = (seconds < 10) ? "0" + seconds : seconds;
   let uptime = "" + hours + " Jam, " + minutes + " Menit dan " + seconds + "." + milliseconds + " Detik";
var embeed = new MessageEmbed()
  .setColor('GOLD')
  .setAuthor(`${bot.user.username} Stats`, bot.user.avatarURL)
  .addField("Uptime",`${uptime}`)
  .addField("Members:",`${bot.users.size}`)
  .addField("Servers:",`${bot.guilds.size}`)
  .addField("Channels:",`${bot.channels.size}`)
.addField('Tanggal dibuat:', `${dateFormats(client.createdAt)}`)
 .addField('🔍 System', `
 CPU : ${model}
 Platform : ${platform()}
 `)
  .addField("Memory Usage:",`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
  .setFooter(`${bot.user.username} Stats`)
  .setTimestamp()
message.channel.send(embeed);
  }
  if (command === "qui"){
    const quiz = require('./quiz.json');
const item = quiz[Math.floor(Math.random() * quiz.length)];
  const auth = message.author.id;
    const filter = response => {
	return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
  //-------
  var izin = new MessageEmbed()
  .setAuthor(`QUIZ`, `https://cdn.discordapp.com/emojis/361331590334251018.png`)
  .setThumbnail(message.author.displayAvatarURL)
  .addField(`ERROR :`, `<@${message.author.id}> , _**Command ini belum dibuka untuk umum.**_\n\nKalo mau coba command ini, beritahu <@${owner}> OK!\n__________________`)
  .setFooter(`Developers only!`)
  .setColor(`RED`)
  if (auth !== owner) return message.channel.send(izin);
  let embed = new MessageEmbed()
  .setAuthor(`QUIZ`, `https://cdn.discordapp.com/emojis/361331590334251018.png`)
  .setThumbnail(message.author.displayAvatarURL)
  .addField(`Category:`, item.category)
  .addField(`Pertanyaan:`, `${item.question}`)
  .addField(`_`, `\`\`\`${item.pil1}\n${item.pil2}\n${item.pil3}\n${item.pil4}\`\`\` `, true)
  .setFooter(`Cara menjawab : Tulis A | B | C | D`)
  .setColor(`BLUE`)
message.channel.send(embed).then(() => {
	message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
		.then(collected => {
    var benar = new MessageEmbed()
  .setAuthor(`QUIZ`, `https://cdn.discordapp.com/emojis/361331590334251018.png`)
  .setThumbnail(message.author.displayAvatarURL)
  .addField(`Category:`, item.category)
  .addField(`Pertanyaan:`, `${item.question}`)
  .addField(`Jawaban:`, `\`\`\`${item.jwb}\`\`\` \n**${collected.first().author} berhasil menjawab dengan benar`)
  .setColor(`BLUE`)
			message.channel.send(benar);
		})
		.catch(collected => {
    var salah = new MessageEmbed()
  .setAuthor(`QUIZ`, `https://cdn.discordapp.com/emojis/361331590334251018.png`)
    .setDescription(`**Waktu Habis!!! Kelihatannya tidak ada yang bisa menjawab dengan benar...**`)
  .setColor(`BLUE`)
			message.channel.send(salah);
    console.log(collected)
		});
})
  }
  if (command === "testing"){
    function delay(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
 }
  const quiz = { 
            lobby: { },
            game: { 
                song1: {},
                song2: {},
                song3: {},
                song4: {},
                song5: {},
                song6: {},
                song7: {},
                song8: {},
                song9: {},
                song10: {}
             }
        }
        message.member.voice.channel.join()
            .then(async connection => {
                var track = await youtube.getVideoByID("4WgWGcED0JQ");
                var url = `https://www.youtube.com/watch?v=${track.raw.id}`
                console.log(track)
                var stream = ytdl(url, { filter: 'audioonly' });
                const dispatcher = connection.play(stream)
                delay(10000)
                message.member.voice.channel.leave();
                message.channel.send("f")
            });    
  }
  if (command === "fact"){
    /*var axios = require("axios").default;

  var options = {
  method: 'GET',
  url: 'https://animu.p.rapidapi.com/fact',
  headers: {
    auth: '31186a66bedaf8cec5709cb65daedf71806890645fe8',
    'x-rapidapi-key': '8c4189ecbamsha08a1ccd63b8c39p1a40b3jsnd160b540e4cf',
    'x-rapidapi-host': 'animu.p.rapidapi.com'
  }}
     axios.request(options).then(function (response) {
        let data = response.data
        p = new MessageEmbed()
       .setAuthor('Anime Fact', `https://cdn.discordapp.com/emojis/825083895057219624.png?v=1`)
       .setColor('BLUE')
       .setDescription(data.fact)
       .setFooter(`${message.author.username} karna lo wibu`)
         message.channel.send(p)
      }).catch(function(error){
          message.channel.send(`Error ngab. [h.fact] <@${owner}>`)
          console.log(error)
      })*/
      message.channel.send('axios lgi error <:ndaktau:831494322901352498>')
};
if (command === "wink"){
  const axios = require('axios')
    const url = `https://some-random-api.ml/animu/wink`
    const got = require('got')
    let data = await got(url).then(res => JSON.parse(res.body))
    var p = new MessageEmbed()
    .setImage(data.link)
    .setColor('BLUE')
    .setFooter('karna lo wibu')
    message.channel.send(p)
}
if (command === "wasted"){
    const got = require('got')
     const user = message.mentions.users.first() || message.author;
    const url = `https://some-random-api.ml/canvas/wasted?avatar=${user.avatarURL({size: 1024, dynamic: 'JPG'})}`
    let attachmnet = new Discord.MessageAttachment(`https://some-random-api.ml/canvas/wasted/?avatar=${message.author.avatarURL({ format: 'png'})}`, 'triggered.gif')
    return message.channel.send(attachmnet)
    /* let response, data;
        try {
            response = await axios.get(url)
            data = response.data
        } catch (e) {
            return message.channel.send(`Error ngab`)
        }*/
        message.channel.send('Maintain!')
}
if (command === "ytcomment"| command === "ytc"){
  const got = require('got')
    const user = message.mentions.users.first() || message.author;
    let att = new Discord.MessageAttachment(`https://some-random-api.ml/canvas/youtube-comment?username=${user.username}&comment=${searchString}&avatar=${user.avatarURL({size: 1024, dynamic: 'JPG'})}`, 'ytc.jpg')
    return message.channel.send('Maintain')
  
    p = new MessageEmbed()
    .setImage(att.attachment)
    message.channel.send(p)
}
if(command === "test"){
    const randomPuppy = require('random-puppy')
    let reddit = [
        "AnimeInOurWorld"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];


    randomPuppy(subreddit).then(async url => {
            await message.channel.send(url)
    }).catch(err => console.error(err));

}
if (command === "snipe2") {
    let embed3 = new MessageEmbed() 
            .setDescription(`Theres nothing to snipe :/`)
            .setFooter(`${message.guild.name} |  `, message.guild.iconURL({ dynamic: true }))
           .setColor(Client.color);
        let snipe = Client.snipes.get(message.channel.id)
        if (!snipe || !snipe.content) return message.channel.send(embed3)
        const embed = new Discord.MessageEmbed({ color: Client.color })
            .setAuthor(snipe.author.username, snipe.author.displayAvatarURL({ dynamic: true, format: 'png' }))
            .setTimestamp()
            .setTitle(`Sniped Message from ${snipe.author.tag}`)
            .setDescription(`Displaying the last deleted message!\n\nThis user said: \`\`\`${snipe.content}\`\`\``)
            .setFooter(`${message.guild.name} |  `, message.guild.iconURL({ dynamic: true }))
        message.channel.send(`I have sniped this users message!`)
        message.channel.send(embed);
    }
  
  if(command === "aki"){
    const { Aki } = require("aki-api");
    const { waitResponse } = require("./functions.js");
 try {
            if (client.gameMembers.has(`${message.guild.id}${message.member.id}`)) {
                let embedMsg = new MessageEmbed()
                    .setColor("RED")
                    .setTitle("Akinator")
                    .setDescription("You are already playing another game! Finish your first one.")
                    .setFooter(message.member.displayName, message.author.avatarURL());

                message.channel.send(embedMsg);
                return;
            }

            client.gameMembers.set(`${message.guild.id}${message.member.id}`, "Akinator");

            let category;
            if (args[0]) category = args[0];
            else category = "characters";
            
            let region;
            switch (category) {
                case "characters":
                    region = "id";
                    break;
                case "objects":
                    region = "id_objects";
                    break;
                case "animals":
                    region = "id_animals";
                    break;
                default:
                    region = "id";
            }

            let embedMsg = new MessageEmbed()
                .setColor("BLUE")
                .setTitle("Akinator")
                .setDescription(`🧠 Starting up... Guessing ${category}!`)
                .setFooter(message.member.displayName, message.author.avatarURL());
            const startingMessage = await message.channel.send(embedMsg);

            const aki = new Aki(region);
            await aki.start();

            startingMessage.delete();

            let questionCount = 0;
            let answer;
            let userChoice;
            let newQuestion = true;
            let gameDone = false;
            do {
                embedMsg = new MessageEmbed()
                    .setColor("BLUE")
                    .setTitle("Akinator")
                    .setDescription("🤔 Thinking...")
                    .setFooter(message.member.displayName, message.author.avatarURL());
                let currentMessage;
                if (newQuestion) {
                    currentMessage = await message.channel.send(embedMsg);

                    await aki.step(userChoice);
                    questionCount += 1;
                } else {
                    await message.reply("That's not a valid input. Please try again.");
                }

                embedMsg
                    .setDescription(`**#${questionCount}**: ${aki.question}`)
                    .setFooter(`Options: ${aki.answers.join(", ")}, Cancel`, message.author.avatarURL())
                if (currentMessage) await currentMessage.edit(embedMsg);
                else await message.channel.send(embedMsg);

                answer = await waitResponse(client, message, message.author, 60);
                if (!answer) {
                    const inactivityEmbed = new MessageEmbed()
                        .setColor("RED")
                        .setTitle("Akinator")
                        .setDescription("Cancelling game due to inactivity.")
                        .setFooter(message.member.displayName, message.author.avatarURL());
                    message.channel.send(inactivityEmbed);
                    return;
                }
                answer = answer.content;

                switch (answer.toLowerCase()) {
                    case "yes":
                        userChoice = 0;
                        newQuestion = true;
                        break;
                    case "no":
                        userChoice = 1;
                        newQuestion = true;
                        break;
                    case "don't know":
                    case "dont know":
                        userChoice = 2;
                        newQuestion = true;
                        break;
                    case "probably":
                        userChoice = 3;
                        newQuestion = true;
                        break;
                    case "probably not":
                        userChoice = 4;
                        newQuestion = true;
                        break;
                    case "cancel":
                        const gameCancelledEmbed = new MessageEmbed()
                            .setColor("RED")
                            .setTitle("Akinator")
                            .setDescription("Game cancelled!")
                            .setFooter(message.member.displayName, message.author.avatarURL());
                        message.channel.send(gameCancelledEmbed);

                        client.gameMembers.delete(`${message.guild.id}${message.member.id}`);

                        return;
                    default:
                        newQuestion = false;
                }

                if (aki.progress >= 95 || aki.currentStep >= 80) gameDone = true;
            } while (gameDone === false);

            await aki.win();

            let guess;
            guess = aki.answers[0];

            embedMsg = new MessageEmbed()
                .setColor("GREEN")
                .setTitle("Akinator")
                .setDescription(`**I'm ${guess.proba * 100}% sure it's...**\n\n${guess.name}\n*${guess.description}*`)
                .setThumbnail(guess.absolute_picture_path)
                .setFooter(message.member.displayName, message.author.avatarURL());

            message.channel.send(embedMsg);

            client.gameMembers.delete(`${message.guild.id}${message.member.id}`);
        } catch (err) {
            console.error("Akinator error: ", err);

            let embedMsg = new MessageEmbed()
                .setColor("RED")
                .setTitle("Akinator")
                .setDescription("Akinator is experiencing some issues right now sorry. Your game has been cancelled.")
                .setFooter(message.member.displayName, message.author.avatarURL());
            message.channel.send(embedMsg);

            client.gameMembers.delete(`${message.guild.id}${message.member.id}`);
        }
  }
  if (command === "userinfo"){
    if (!message.mentions.users.size) {
        let userinfo = message.author;
        let memberinfo = message.guild.member(userinfo);
            const { Client, MessageEmbed, GuildMember } = require('discord.js');
            const umser = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(`${userinfo.username} Userinfo`)
            .setAuthor(userinfo.tag, userinfo.displayAvatarURL({format:'png' }))
            .setThumbnail(userinfo.displayAvatarURL({format:'png' }))
            .addFields(
                { name: 'Created at', value: `${userinfo.createdAt}`, inline: true },
                { name: 'ID', value: userinfo.id, inline: true},
                { name: 'Joined at', value: memberinfo.joinedAt, inline: true },
                { name: 'Roles', value: memberinfo.roles.highest.name, inline: true },
            )
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({format:'png' }));
      const embed = await message.channel.send(umser)
        if(message.member.presence.activities.name === 'Spotify') {
            embed.react("🎧")
        }

        const filter = (reaction, user) => {
            return '🎧'.includes(reaction.emoji.name) && user.id === message.author.id;
        };

        embed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
    
            
                embed.reactions.removeAll()
            }
        )
                const spotify = new MessageEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
                    .setTitle("🎧 Listening to Spotify")
                    .setColor(`GREEN`)
                    .setThumbnail(message.author.presence.activity.assets.largeImageURL())
                    .addField("💿 Song Title", message.member.presence.activity.details)
                    .addField("🎼 Song Author", `by ${message.member.presence.activity.state}`)
                    .addField("💽 Song Album", message.member.presence.activity.assets.largeText)
                message.channel.send(spotify)
 }
  }
  if (command === "echo"){
  let suggestmessage = args.join(" ").slice(29);
    let suggestchannel = message.mentions.channels.first();
   

    if (!suggestchannel) {
        return message.reply("Please mention a channel")
    }

    if (!suggestmessage) {
        return message.reply("Please give a valid message")
    }

    let embed = new MessageEmbed()
        .setColor("RANDOM")
        .addField(`${message.guild}`, `${suggestmessage}`)
        .setFooter(`Suggested By ${message.author.tag}`)
        .setTimestamp()
     /* suggestchannel.send({embed}).then(msg => {
        msg.react("👍").then(r => msg.react("👎")) 
    });*/
      suggestchannel.send(suggestmessage)
    //-----------------------------------------------------------------//
     let log = bot.channels.cache.get('840513794119434271')
    let m = new MessageEmbed()
    .setColor('BLUE')
    .setAuthor(`${message.guild}`, bot.user.avatarURL)
    .setThumbnail(`https://cdn.discordapp.com/emojis/831494322901352498.png?v=1`)
    .setDescription(`**Pesan : **\n${suggestmessage}\n\n**Dari :**\n<#${message.channel.id}>\n\n**Ke :**\n${suggestchannel}\n\n<@${message.author.id}>`)
    .setFooter(`Dari ${message.author.tag}, di channel ${suggestchannel.name}`)
    log.send(m) 
    return;
  }
    if (command === "snipe") {
        const msg = bot.snipes.get(message.channel.id)
        const embed = MessageEmbed()
        .setAuthor(message.author, message.member.user.displayAvatarURL())
        .setDescription(msg.content)
        .setFooter('Snipe wangy wangy')
        .setTimestamp()
        message.channel.send(embed)
    }
  
    if (command === "ping"){
        let repl = ["Pong!", "Pang.", "What are you doing?", "Peng", "U-Uh... h-hi", "W-Was I fast enough?"]
        let result = Math.floor((Math.random() * repl.length));
        var ping = Date.now() - message.createdTimestamp
        if (ping > 500) p = "MTF"
        if (ping < 500) p = "Nice! <:ndaktau:831494322901352498>"
        message.channel.send(`:mega: *${repl[result]}* - My ping: **${ping}** ms (${p})`)
    }
  
    if (command === "images" || command === "photos" || command === "image"){
    /*   if (!searchString){
        const got = require('got')
        const url = `https://api.unsplash.com/photos/random/?client_id=Qmb9rVSNnmGqM_9c8YkJM6mtLjs3AzBn0dotq7-H4RE`
       
        let dat = await got(url).then(res => JSON.parse(res.body))
        message.channel.send(dat.urls.regular)
       } else */
        if (searchString === "raw"){
        const got = require('got')
        const url = `https://api.unsplash.com/photos/random/?client_id=Qmb9rVSNnmGqM_9c8YkJM6mtLjs3AzBn0dotq7-H4RE`
       
        let dat = await got(url).then(res => JSON.parse(res.body))
        const emb = new MessageEmbed()
    /*  .setColor(dat.color)
        .setTitle(dat.alt_description)
        .setDescription(`__**Info**__\n${dat.exif.make}\n${dat.exif.model} ${dat.exif.exposure_time}\nISO ${dat.exif.iso} \n\n[**Source**](${dat.links.html})`)
        .setImage(dat.urls.regular)
        .setFooter('Unsplash Image')
    message.channel.send(emb) */
      message.channel.send(dat.urls.raw) 
} else if (searchString === "regular"){
    const got = require('got')
        const url = `https://api.unsplash.com/photos/random/?client_id=Qmb9rVSNnmGqM_9c8YkJM6mtLjs3AzBn0dotq7-H4RE`
       
        let dat = await got(url).then(res => JSON.parse(res.body))
        message.channel.send(dat.urls.regular)
} else if (searchString === "full"){
    const got = require('got')
        const url = `https://api.unsplash.com/photos/random/?client_id=Qmb9rVSNnmGqM_9c8YkJM6mtLjs3AzBn0dotq7-H4RE`
       
        let dat = await got(url).then(res => JSON.parse(res.body))
        message.channel.send(dat.urls.full)
} else if (searchString !== "full" || searchString !== "raw" || searchString !== "regular"){
  if (!searchString) return message.channel.send('Gambar apa yang ingin kamu cari?\nSearch    : `h.images [Gambar]`\nRandom : `h.images full | raw | regular` ')
   const got = require('got')
  try {  
  const url = `https://api.unsplash.com/search/photos?page=1&query=${searchString}&client_id=Qmb9rVSNnmGqM_9c8YkJM6mtLjs3AzBn0dotq7-H4RE`
   let r = Math.floor(Math.random() * 7);
    let dat = await got(url).then(res => JSON.parse(res.body))
    message.channel.send(dat.results[r].urls.regular)
} catch (error) {
  message.channel.send('Try Again!')
}
}
}
if (command === "anime"){
    const Kitsu = require('kitsu.js');
          const kitsu = new Kitsu();
          var search = message.content.split(/\s+/g).slice(1).join(" ");
      
          if (!search) {
              return message.channel.send(`Baka! You need to specify an anime to search!\nTry: \`.anime [Anime]\``);
          } else {
              var search = message.content.split(/\s+/g).slice(1).join(" ");
      
              kitsu.searchAnime(search).then(result => {
                  if (result.length === 0) {
                      return message.channel.send(`No results found for **${search}**!`);
                  }
      
                  var anime = result[0]
      
                  var embed = new MessageEmbed()
                      .setColor('#36393F')
                      .setAuthor(`${anime.titles.english ? anime.titles.english : search} | ${anime.showType}`, anime.posterImage.original)
                      .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
                      .addField('❯\u2000\Information', `•\u2000\**Japanese Name:** ${anime.titles.romaji}\n\•\u2000\**Age Rating:** ${anime.ageRating}\n\•\u2000\**NSFW:** ${anime.nsfw ? 'Yes' : 'No'}`, true)
                      .addField('❯\u2000\Stats', `•\u2000\**Average Rating:** ${anime.averageRating}\n\•\u2000\**Rating Rank:** ${anime.ratingRank}\n\•\u2000\**Popularity Rank:** ${anime.popularityRank}`, true)
                      .addField('❯\u2000\Status', `•\u2000\**Episodes:** ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n\•\u2000\**Start Date:** ${anime.startDate}\n\•\u2000\**End Date:** ${anime.endDate ? anime.endDate : "Still airing"}`, true)
                      .setImage(anime.posterImage.original);
                  return message.channel.send({ embed });
              }).catch(err => {
                  console.log(err)
                  return message.channel.send(`No results found for **${search}**! or try again!`);
              });
          }

}
if (command === 'gantipp'){
    if (message.author.id !== owner) return message.channel.send('khusus owner!')
    if (!searchString) return message.channel.send('masukkan gambar')
    if (message.author.id == owner){
    bot.user.setAvatar(searchString)
    .then(user =>
message.channel.send("Avatar berhasil diubah!")
  .catch(
      message.channel.send(console.error)))
  }
}
if (command === "search"){
    const got = require('got')
    const url = `https://api.unsplash.com/search/photos?page=1&query=${searchString}&client_id=Qmb9rVSNnmGqM_9c8YkJM6mtLjs3AzBn0dotq7-H4RE`
   let r = Math.floor(Math.random() * 11);
    let dat = await got(url).then(res => JSON.parse(res.body))
    message.channel.send(dat.results[r].urls.regular)
  }
  if (command === "ss"){
    if (!searchString) return message.channel.send('Masukkan url!')
    const axios = require('axios')
    const url = `https://shot.screenshotapi.net/screenshot?&url=${searchString}&fresh=true&output=json&file_type=png&wait_for_event=load`;
    const got = require('got')
    let data = await got(url).then(res => JSON.parse(res.body))
    let w = new MessageEmbed()
    .setAuthor(data.url)
    .setImage(data.screenshot)
    .setColor('BLUE')
    .setFooter('Web Screenshot')
    message.channel.send(w)
  }
  if (command === "adzan"){
    let txt = args.join(' ')
  if (!args[0]) return message.channel.send(`\`.adzan <city>\` (Hanya tersedia kota" di indonesia. Kota negara lain tdk tersedia)`)
  const url = `http://api.aladhan.com/v1/timingsByCity?city=${txt}&country=Indonesia&method=8`;
        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
          } catch (e) {
            return message.channel.send(`Error \`${e}\``)
        }
   var hmm = new MessageEmbed()
  .setAuthor(`Adzan Prayer Time | ${searchString}`)
  .setDescription(`Today`)
  .addField(`Subuh`, data.data.timings.Fajr, false)
  .addField(`Dzuhur`, data.data.timings.Dhuhr, false)
  .addField(`Ashar`, data.data.timings.Asr, true)
   .addField(`Magrib`, data.data.timings.Maghrib, false)
  .addField(`Isha`, data.data.timings.Isha, true)
  .setFooter(`${searchString}, Indonesia`, message.author.avatarURL)
  .setTimestamp()
  .setColor(`BLUE`)
message.channel.send(hmm)
          }
  
    if (command === "morse-encode" || command === "morsee"){
      if (!searchString) return message.channel.send('Mengubah Teks ke Kode Morse.\nKetik `h.morsee [Teks]` tanpa `[]`.')
       const translate = morse.encode(searchString)
        const embed = new MessageEmbed()
        .setTitle('Morse Encode (Teks - Morse)')
        .setColor('BLUE')
        .addField('Teks', searchString, false)
        .addField('Morse', `\`${translate}\``, false)
        .setFooter(`Hi ${message.author.username} | Alternatif : \`h.morsee\``, message.author.avatarURL())
        message.channel.send(embed)
       message.channel.send(`\`${translate}\``)
    }
  
if (command === "morse-decode" || command === "morsed"){
       if (!searchString) return message.channel.send('Mengubah Kode morse ke Teks.\nKetik `h.morsed [Morse]` tanpa `[]`.')
        const translate = morse.decode(searchString)
        const embed = new MessageEmbed()
        .setTitle('Morse Decode (Morse - Teks)')
        .setColor('BLUE')
        .addField('Morse', searchString, false)
  .addField('Text', translate, false)
        .setFooter(`Hi ${message.author.username} | Alternatif : \`h.morsed\``, message.author.avatarURL())
        message.channel.send(embed)
    }
  
   if (command === "say" && message.author.id == owner){
     message.delete({timeout: 100})
     message.channel.send(searchString)
     } else if (command === "say" && message.author.id != owner){
       if (!searchString) return message.channel.send(`mau ngomong ap, ${message.author.username}?`)
       message.channel.send(`${searchString} \n\n- **${message.author.tag}**`)
       }
  
 let user = message.mentions.users.first()
  if (command === "spam" && user == owner) {
      if (!searchString) return message.channel.send(`lu mau w spam apaan bro? ${message.author.username}`) 
     message.channel.send(`bacot lu. ${message.author.username} nak harom`)
    } else if (command === "spam" && message.channel.id !== "730666270139088918"){
      message.delete({timeout : 100})
     message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`huh. <@${message.author.id}>`)
  } else if (command === "spam" && message.channel.id === "730666270139088918"){
      message.channel.send('dont spam in general dud')
  }
  if (command === "spams" && message.author.id == owner){
    message.delete({timeout : 100})
     message.channel.send(`${searchString}`)
   message.delete({timeout : 100})
     message.channel.send(`${searchString}`)
   message.delete({timeout : 100})
    message.channel.send(`${searchString}`)
   message.delete({timeout : 100})
     message.channel.send(`${searchString}`)
   message.delete({timeout : 100})
     message.channel.send(`${searchString}`)
   message.delete({timeout : 100})
     message.channel.send(`${searchString}`)
   message.delete({timeout : 100})
    message.channel.send(`${searchString}`)
   message.delete({timeout : 100})
     message.channel.send(`${searchString}`)
   message.delete({timeout : 100})
     message.channel.send(`${searchString}`)
   message.delete({timeout : 100})
     message.channel.send(`${searchString}`)
}
   
  if (command === "spam100" && message.author.id == owner){
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`Tugas ku sudah selesai, bang <@{owner}> :thumbsup:`)
    } else if (command === "spam100" && message.author.id != owner) {
      message.channel.send('go away brrrrr')
      }
    
    if (command === "ai" || command === "ask") {
       const url = `https://api.udit.gq/api/chatbot?message=${searchString}&gender=male&name=${message.author.username}`
       let response, data;
       try {
           response = await axios.get(url)
           data = response.data
       } catch (e) {
           return message.channel.send(`Error ngab`)
       }
        message.channel.send(data.message)
    }
    if (command === "avatar"){
        const user = message.mentions.users.first() || message.author;
        const em = new MessageEmbed()
        .setTitle(`${user.tag}`)
        .setImage(user.avatarURL({size: 1024, dynamic: 'GIF'}))
        .setColor(`BLUE`)
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(em)
    }
    if (command === "choose"){
        if (!args[0]) return message.channel.send('Please Give Me Text!');

        if (!searchString.toLowerCase().includes(" ")) {
            return message.channel.send('Please Give Me 2nd Choice & Add Or!')
        };

        if (searchString.toLowerCase().endsWith("or")) {
            return message.channel.send('Please Give Me 2nd Choice!')
        };

        if (searchString.length > 500) return message.channel.send('wuh santai ngab | Limit : 500');

        let LowerCaseOr = searchString.replace("Or", "or").replace("oR", "or").replace("OR", "or");

        let Select = LowerCaseOr.split(` `)
        let Result = Select[Math.floor(Math.random() * Select.length)]
        message.channel.send(Result)
    }
    if (command === "wangy"){
        if(!searchString) return message.channel.send('Masukkan nama!')
        let idk = searchString.replace(searchString, String.call.bind(searchString.toUpperCase))
        message.channel.send(`${idk} WANGY WANGY WANGY\n\nWANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya ${idk} wangi aku mau nyiumin aroma wanginya ${idk} AAAAAAAAH - Rambutnya.. aaah rambutnya juga pengen aku elus-elus ~AAAAAH ${idk} manis banget AAAAAAAAH TATAPAN ${idk} BEGITU MENGGODAAAAAAAAA.. GUA RELA JADI BUDAK SIMP HANYA DEMI ${idk} TERDJINTA AAAAAAA apa ? ${idk} itu gak nyata ? Cuma karakter 2 dimensi katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA ! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ${idk} ngeliat gw ... ${idk} NGELIATIN GW! ${idk}... kamu percaya sama aku ? aaaaaaaaaaah syukur ${idk}\n\ngak malu memiliki aku aaaaaah YEAAAAAAAAAAAH GUA\n\n\nMASIH PUNYA ${idk}, ${idk} AKU SAYANG ${idk} AKU CINTA ${idk} AKU AKU INGIN ${idk} MENJADI BIDADARIKUUUUUUU!!!!!!!!!!!!!`)
    }
    if (command === "wikihow"){
      var api = `https://kagchi-api.glitch.me/wikihow`
    let response, data;
       try {
           response = await axios.get(api)
           data = response.data
       } catch (e) {
           return message.channel.send(`Error ngab`)
       }
      var o = new MessageEmbed()
      .setAuthor(data.title, bot.user.avatarURL())
      .setImage(data.url)
      .setDescription(`[**WikiHow Source**](${data.article_url})`)
      .setFooter('WIKIHOW MENGGAJE', message.author.avatarURL())
      .setColor('GREEN')
      message.channel.send(o)
      }
//------------ M U S I C . C O M M A N D S -----------------//
    if (command === "help") {
        const helpembed = new MessageEmbed()
            .setColor("BLUE")
            .setAuthor("Commands list", bot.user.displayAvatarURL())
            .setDescription(`
_**New Commands**_
 \`h.wink\` \`h.adzan\` \`h.wikihow\`
 \`h.choose\` \`h.wangy\`
 
 ||**Maintain : <:ndaktau:831494322901352498>**
 \`h.wasted\` \`h.ytc\` ||

**ndak tau**
 \`h.ask\` \`h.spam\` \`h.images\`
 \`h.ping\` \`h.avatar\` \`h.morsee\`
 \`h.morsed\`

**Music**
 \`h.play\` \`h.search\` \`h.skip\`
 \`h.stop\` \`h.pause\` \`h.resume\`
 \`h.nowplaying\` \`h.queue\` \`h.volume\`
 \`h.lyrics\`
 `)
            .setFooter("bot paris", message.author.avatarURL);
            message.channel.send(helpembed)
            message.channel.send("i hope this not error")
        }
  if (message.content === "iam") {
    message.channel.send("<@470195472158425110>")
    message.channel.send("<@470195472158425110>")
    message.channel.send("<@470195472158425110>")
    }
  if (command === "lyrics" || command === "l"){
    
    var api = `https://some-random-api.ml/lyrics?title=${searchString}`
    let response, data;
       try {
           response = await axios.get(api)
           data = response.data
       } catch (e) {
           return message.channel.send(`Error ngab`)
       }
    let p = new MessageEmbed()
    .setAuthor(data.title, bot.user.avatarURL())
    .setThumbnail(data.thumbnail.genius)
    .setDescription(`${data.lyrics}\n\n[𝗦𝗼𝘂𝗿𝗰𝗲](${data.links.genius})`)
    .setColor('BLUE')
    .setFooter(data.author, message.author.avatarURL())
    message.channel.send(p)
    message.channel.send(`Kalo g muncul, mungkin lirikny lbih dri 2000kata.\nCoba ketik \`h.lyricst [Lagu]\`. Mungkin bisa.`)
    }
   if (command === "play" || command === "p") {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send({
            embed: {
                color: "RED",
                description: "I'm sorry, but you need to be in a voice channel to play a music!"
            }
        });
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) {
            return message.channel.send({
                embed: {
                    color: "RED",
                    description: "Sorry, but I need a **`CONNECT`** permission to proceed!"
                }
            });
        }
        if (!permissions.has("SPEAK")) {
            return message.channel.send({
                embed: {
                    color: "RED",
                    description: "Sorry, but I need a **`SPEAK`** permission to proceed!"
                }
            });
        }
        if (!url || !searchString) return message.channel.send({
            embed: {
                color: "RED",
                description: "Please input link/title to play music"
            }
        });
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
            }
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `✅  **|**  Playlist: **\`${playlist.title}\`** has been added to the queue`
                }
            });
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    var video = await youtube.getVideoByID(videos[0].id);
                    if (!video) return message.channel.send({
                        embed: {
                            color: "RED",
                            description: "🆘  **|**  I could not obtain any search results"
                        }
                    });
                } catch (err) {
                    console.error(err);
                    return message.channel.send({
                        embed: {
                            color: "RED",
                            description: "🆘  **|**  I could not obtain any search results"
                        }
                    });
                }
            }
            return handleVideo(video, message, voiceChannel);
        }
    }
    if (command === "search" || command === "sc") {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send({
            embed: {
                color: "RED",
                description: "I'm sorry, but you need to be in a voice channel to play a music!"
            }
        });
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) {
            return message.channel.send({
                embed: {
                    color: "RED",
                    description: "Sorry, but I need a **`CONNECT`** permission to proceed!"
                }
            });
        }
        if (!permissions.has("SPEAK")) {
            return message.channel.send({
                embed: {
                    color: "RED",
                    description: "Sorry, but I need a **`SPEAK`** permission to proceed!"
                }
            });
        }
        if (!url || !searchString) return message.channel.send({
            embed: {
                color: "RED",
                description: "Please input link/title to search music"
            }
        });
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
            }
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `✅  **|**  Playlist: **\`${playlist.title}\`** has been added to the queue`
                }
            });
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    let embedPlay = new MessageEmbed()
                        .setColor("BLUE")
                        .setAuthor("Search results", message.author.displayAvatarURL())
                        .setDescription(`${videos.map(video2 => `**\`${++index}\`  |**  ${video2.title}`).join("\n")}`)
                        .setFooter("Please choose one of the following 10 results, this embed will auto-deleted in 15 seconds");
                    // eslint-disable-next-line max-depth
                    message.channel.send(embedPlay).then(m => m.delete({
                        timeout: 15000
                    }))
                    try {
                        var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
                            max: 1,
                            time: 15000,
                            errors: ["time"]
                        });
                    } catch (err) {
                        console.error(err);
                        return message.channel.send({
                            embed: {
                                color: "RED",
                                description: "The song selection time has expired in 15 seconds, the request has been canceled."
                            }
                        });
                    }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return message.channel.send({
                        embed: {
                            color: "RED",
                            description: "🆘  **|**  I could not obtain any search results"
                        }
                    });
                }
            }
            response.delete();
            return handleVideo(video, message, voiceChannel);
        }

    } else if (command === "skip") {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: "RED",
                description: "I'm sorry, but you need to be in a voice channel to skip a music!"
            }
        });
        if (!serverQueue) return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing that I could skip for you"
            }
        });
        serverQueue.connection.dispatcher.end("[runCmd] Skip command has been used");
        return message.channel.send({
            embed: {
                color: "GREEN",
                description: "⏭️  **|**  I skipped the song for you"
            }
        });

    } else if (command === "stop") {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: "RED",
                description: "I'm sorry but you need to be in a voice channel to play music!"
            }
        });
        if (!serverQueue) return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing that I could stop for you"
            }
        });
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end("[runCmd] Stop command has been used");
        return message.channel.send({
            embed: {
                color: "GREEN",
                description: "⏹️  **|**  Deleting queues and leaving voice channel..."
            }
        });

    } else if (command === "volume" || command === "vol") {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: "RED",
                description: "I'm sorry, but you need to be in a voice channel to set a volume!"
            }
        });
        if (!serverQueue) return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing"
            }
        });
        if (!args[1]) return message.channel.send({
            embed: {
                color: "BLUE",
                description: `The current volume is: **\`${serverQueue.volume}%\`**`
            }
        });
        if (isNaN(args[1]) || args[1] > 100) return message.channel.send({
            embed: {
                color: "RED",
                description: "Volume only can be set in a range of **\`1\`** - **\`100\`**"
            }
        });
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolume(args[1] / 100);
        return message.channel.send({
            embed: {
                color: "GREEN",
                description: `I set the volume to: **\`${args[1]}%\`**`
            }
        });

    } else if (command === "nowplaying" || command === "np") {
        if (!serverQueue) return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing"
            }
        });
        return message.channel.send({
            embed: {
                color: "BLUE",
                description: `🎶  **|**  Now Playing: **\`${serverQueue.songs[0].title}\`**`
            }
        });

    } else if (command === "queue" || command === "q") {

        let songsss = serverQueue.songs.slice(1)
        
        let number = songsss.map(
            (x, i) => `${i + 1} - ${x.title}`
        );
        number = chunk(number, 5);

        let index = 0;
        if (!serverQueue) return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing"
            }
        });
        let embedQueue = new MessageEmbed()
            .setColor("BLUE")
            .setAuthor("Song queue", message.author.displayAvatarURL())
            .setDescription(number[index].join("\n"))
            .setFooter(`• Now Playing: ${serverQueue.songs[0].title} | Page ${index + 1} of ${number.length}`);
        const m = await message.channel.send(embedQueue);

        if (number.length !== 1) {
            await m.react("⬅");
            await m.react("🛑");
            await m.react("➡");
            async function awaitReaction() {
                const filter = (rect, usr) => ["⬅", "🛑", "➡"].includes(rect.emoji.name) &&
                    usr.id === message.author.id;
                const response = await m.awaitReactions(filter, {
                    max: 1,
                    time: 30000
                });
                if (!response.size) {
                    return undefined;
                }
                const emoji = response.first().emoji.name;
                if (emoji === "⬅") index--;
                if (emoji === "🛑") m.delete();
                if (emoji === "➡") index++;

                if (emoji !== "🛑") {
                    index = ((index % number.length) + number.length) % number.length;
                    embedQueue.setDescription(number[index].join("\n"));
                    embedQueue.setFooter(`Page ${index + 1} of ${number.length}`);
                    await m.edit(embedQueue);
                    return awaitReaction();
                }
            }
            return awaitReaction();
        }

    } else if (command === "pause") {
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: "⏸  **|**  Paused the music for you"
                }
            });
        }
        return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing"
            }
        });

    } else if (command === "resume") {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: "▶  **|**  Resumed the music for you"
                }
            });
        }
        return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing"
            }
        });
    } else if (command === "loop") {
        if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `🔁  **|**  Loop is **\`${serverQueue.loop === true ? "enabled" : "disabled"}\`**`
                }
            });
        };
        return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing"
            }
        });
    }
});

async function handleVideo(video, message, voiceChannel, playlist = false) {
    const serverQueue = queue.get(message.guild.id);
    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 100,
            playing: true,
            loop: false
        };
        queue.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(message.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`[ERROR] I could not join the voice channel, because: ${error}`);
            queue.delete(message.guild.id);
            return message.channel.send({
                embed: {
                    color: "RED",
                    description: `I could not join the voice channel, because: **\`${error}\`**`
                }
            });
        }
    } else {
        serverQueue.songs.push(song);
        if (playlist) return;
        else return message.channel.send({
            embed: {
                color: "GREEN",
                description: `✅  **|**  **\`${song.title}\`** has been added to the queue`
            }
        });
    }
    return;
}

function chunk(array, chunkSize) {
    const temp = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        temp.push(array.slice(i, i + chunkSize));
    }
    return temp;
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        return queue.delete(guild.id);
    }

    const dispatcher = serverQueue.connection.play(ytdl(song.url))
        .on("finish", () => {
            const shiffed = serverQueue.songs.shift();
            if (serverQueue.loop === true) {
                serverQueue.songs.push(shiffed);
            };
            play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
    dispatcher.setVolume(serverQueue.volume / 100);

    serverQueue.textChannel.send({
        embed: {
            color: "BLUE",
            description: `🎶  **|**  Start Playing: **\`${song.title}\`**`
        }
    });
}

bot.login(process.env.BOT_TOKEN);

process.on("unhandledRejection", (reason, promise) => {
    try {
        console.error("Unhandled Rejection at: ", promise, "reason: ", reason.stack || reason);
    } catch {
        console.error(reason);
    }
});

process.on("uncaughtException", err => {
    console.error(`Caught exception: ${err}`);
    process.exit(1);
});
/*
bot.user.setActivity("bit.ly/faris0520w", {
  type: "LISTENING",
  url: "https://bit.ly/faris0520w"
}); */
client.once('ready', async () => {
	const data = {
		name: 'echo',
		description: 'Replies with your input!',
		options: [{
			name: 'input',
			type: 'STRING',
			description: 'The input which should be echoed back',
			required: true,
		}],
	};

	const command = await client.application.commands.create(data);
	console.log(command);
  const dat = {
		name: 'ping',
		description: 'Replies with Pong!',
	};

	const commamnd = await client.guilds.cache.get('695851369277685760').commands.create(dat);
	console.log(commamnd);
});

  bot.on('messageDelete', message => {       
       console.log(`${message.id} was deleted!`);
            // Partial messages do not contain any content so skip them
            if (!message.partial) {
              console.log(`It had content: "${message.content}"`);
              let log = bot.channels.cache.get('840513794119434271')
              let d = new MessageEmbed()
                .setColor('RED')
                .setAuthor('- Deleted Messages -', message.author.displayAvatarURL({format: 'png'}))
                .addFields(
                    { name: 'From', value: `<@${message.author.id}>`},
                    { name: 'Channel', value: `<#${message.channel.id}>`},
                    { name: 'Content', value: message.content}
                )
                .setFooter(`si ${message.author.username} ngapus pesan`)
                .setTimestamp()
                log.send(d)
            }
          });