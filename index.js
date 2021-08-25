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
//-----------HANDLER Boi ------------//
//----------------------------------//
const bot = new Client
const PREFIX = process.env.PREFIX;
const youtube = new YouTube(process.env.YTAPI_KEY);
const queue = new Map();

bot.on("warn", console.warn);
bot.on("error", console.error);
bot.on("ready", async () => {
  console.log(`[READY] ${bot.user.tag} has been successfully booted up!`)
/* bot.user.setPresence({
        status: 'mobile',
        activity: {
            name: "How to make slash command",
            type: "STREAMING",
            URL: "https://www.twitch.tv/chillhopmusic"
        }
    })})*/
let setatus = [
    `in ${bot.guilds.cache.size} servers`,
    `on ${bot.channels.cache.size} channels`,
    `with ${bot.users.cache.size} dumbass`,
   `with ma members`,
   `ROBLOX`,
  `How to make slash command`,
  `with ma honey`,
  `with WIBU`
  ];
  setInterval(() => {
    let index = Math.floor(Math.random() * (setatus.length - 1) + 1);
    //${db.get(`status`)}
    bot.user.setActivity(setatus[index], {
      type: "STREAMING",
      URL: "https://www.twitch.tv/chillhopmusic"
    });
  }, 20000);
})
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
bot.on("message", async (message) => { 
   let meseg = message.content.toLowerCase();
    if (meseg === `<@${bot.user.id}>` || meseg === (`<@!${bot.user.id}>`)) {
      const prefix = require("discord-prefix");
      let defaultPrefix = PREFIX;
      let guildPrefix = prefix.getPrefix(message.guild.id);
    
      if (!guildPrefix) guildPrefix = defaultPrefix;
    message.channel.send(`My Prefix = \`h.\``);
  }
    // eslint-disable-line
  let emgj = ["<:patk3:727906033061855232>", "<:eugh:831477683426295811>", "<:ndaktau:831494322901352498>", "<:heeeeeqqq:730722268107505725>", "<:pog:809959799361372202>", "<:Y_:734443758313144360>", "<:uh:829334002347278396>","<:oh:734444160177799178>", "<:sudahkuduqa:831210009861423126>", "<:Yoi:745142694359334912>", "<a:790481697145225237:812973632799244318>", "<:thanos:826748195899703316>", "<:imsad:831776276163067986>"]
  let ranem = Math.floor((Math.random() * emgj.length));
  if (message.content === "test"){
    message.react(`${ranem}`)
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
    if (message.channel.id === '827581906140528660' || 
      message.channel.id === "830950242030977034" || 
      message.channel.id === "831383137967276084" || 
      message.channel.id === "831390930035802113") {
       const pesan = await fetch(
            `https://api.udit.gq/api/chatbot?message=${args}&gender=male&name=${message.author.username}`)
            .then(response => response.json())
            .then(data => data.message)
      message.channel.send(`${pesan}`)
        }
  // ------------------- OTHER COMMANDS -----------------------//
        if (!message.content.startsWith(PREFIX)) return;
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
  message.channel.send(att.attachment)
    p = new MessageEmbed()
    .setImage(att.attachment)
    message.channel.send(p)
}
  if (command === "clear"){
    if (!searchString) return message.channel.send('masukkan jumlah!')
    if (message.author.id !== owner) return message.channel.send('hi')
    message.delete()
      .then(() => {
        message.channel.bulkDelete(searchString)
          .then((messages) => {
          message.channel.send(`Cleared ${messages.size} message(s).`)
            .then((botMessage) => {
              setTimeout(function () {
                botMessage.delete();
              }, 3000);
            });
        });
      })
      .catch(console.error);
  }
  if (command === "serverinfo"){
        const d = new Date(message.guild.createdTimestamp);
    let day;
    let month;
    if (d.getDate() < 10) {
      day = `0${d.getDate()}`;
    } else {
      day = d.getDate();
    }
    if (d.getMonth() + 1 < 10) {
      month = `0${d.getMonth() + 1}`;
    } else {
      month = d.getMonth();
    }

    const guild = message.guild;

    const Embed = new MessageEmbed()
      .setTitle(message.guild.name)
      .setThumbnail(message.guild.iconURL())
      .setColor('BLUE')
      .addFields([
        { name: "Owner", value: `<@${guild.ownerID}>`, inline: true },
        { name: "Region", value: guild.region, inline: true },
        { name: "Members", value: guild.memberCount, inline: true },
        { name: "Highest Role", value: guild.roles.highest, inline: true },
      ])
      .setFooter(
        `Server Created = ${day}/${month}/${d.getFullYear()}`
      );

    message.channel.send(Embed);
  }
  if (command === "userinfo" || command === "ui"){
        var person = message.author;
        let memberinfo = message.guild.member(person);
            const { Client, MessageEmbed, GuildMember } = require('discord.js');
    let role = message.member.roles.hoist;
            const umser = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(`${person.username} Userinfo`)
            .setAuthor(person.tag, person.displayAvatarURL({format:'png' }))
            .setThumbnail(person.displayAvatarURL({format:'png' }))
            .addFields(
                { name: 'Created at', value: `${person.createdAt}`, inline: true },
                { name: 'ID', value: person.id, inline: true},
                { name: 'Joined at', value: memberinfo.joinedAt, inline: true },
                { name: 'Roles', value: role, inline: true },
            )
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({format:'png' }));
      const embed = await message.channel.send(umser)
        if(message.member.presence.activities[0].name === 'Spotify') {
            embed.react("<:r_spotify:843373295046885386>")
        }
                  const spotify = new MessageEmbed()
                    .setAuthor('Listening to Spotify')
                    .setColor(`GREEN`)
                    .setThumbnail(person.presence.activities[0].assets.largeImageURL())
                    .setDescription(`${person.presence.activities[0].details}\nby ${person.presence.activities[0].state}\n**${person.presence.activities[0].assets.largeText}**`)
                    message.channel.send(spotify)

        const filter = (reaction, user) => {
            return "<:r_spotify:843373295046885386>".includes(reaction.emoji.name) && user.id === message.author.id;
        };

        embed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
                  const spotify = new MessageEmbed()
                    .setAuthor('Listening to Spotify', 'https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png')
                    .setColor(`GREEN`)
                    .setThumbnail(person.presence.activities[0].assets.largeImageURL())
                    .setDescription(`${person.presence.activities[0].details}\nby ${person.presence.activities[0].state}\n**${person.presence.activities[0].assets.largeText}**`)
                    message.channel.send(spotify)
            }
        ) 
 }

  if (command === "respect" || command === "f"){
     if (!searchString) {
       let p = new MessageEmbed()
       .setDescription('Press <a:r_pressf:843389937139449856> to pay respect.')
       .setColor('GREEN')
      return message.channel
        .send(p)
        .then(async msg => {
          await msg.react("<a:r_pressf:843389937139449856>");

          const filter = async (reaction, user) => {
            const botReact = await user.bot;
            const userReact = await reaction.message.guild.members.cache.get(
              user.id
            );

            if (!botReact)
              message.channel.send(
                `**${userReact.user.username}** has paid their respect.`
              );

            return reaction.emoji.id === "843389937139449856";
          };

          const reactions = msg
            .awaitReactions(filter, { time: 30000 })
            .then(collected =>
              message.channel.send(
                `**${msg.reactions.cache.get("<a:r_pressf:843389937139449856>")}** person has paid their respect.`
              )
            );
        });
    } else {
      let reason = args.join(" ");
      let p = new MessageEmbed()
       .setDescription(`Press <a:r_pressf:843389937139449856> to pay respect to **${searchString}**`)
       .setColor('GREEN')
      return message.channel
        .send(p)
        .then(async msg => {
          await msg.react("<a:r_pressf:843389937139449856>");

          const filter = async (reaction, user) => {
            const botReact = await user.bot;
            const userReact = await reaction.message.guild.members.cache.get(
              user.id
            );

            if (!botReact)
              message.channel.send(
                `**${userReact.user.username}** has paid their respect.`
              );

            return reaction.emoji.id === "843389937139449856";
          };

          const reactions = msg
            .awaitReactions(filter, { time: 60000 })
            .then(collected =>
              message.channel.send(
                `**${msg.reactions.cache.get("<a:r_pressf:843389937139449856>").count}** person paid their respect to **${searchString}**`
              )
            );
        });
  }}
  if (command === "gantinama"){
    if (!message.author.id === owner) return message.channel.send('go away brrrrrr')
    bot.user.setUsername(`${searchString}`)
  .then(user => {
      message.channel.send(`Username berhasil diubah. \nUsername: \`${user.username}\` `)
      console.log(`My new username is ${user.username}`)})
  .catch(error => {
      message.channel.send(console.error)
    console.log(error)
      })
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
        if (ping > 500) p = "MF >:"
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
    if (command === "morse"){
      message.channel.send('Morse Translator.\nText -> Morse = `h.morsee`\nMorse -> Text = `h.morsed`')
    }
    if (command === "morse" || searchString[0] === "encode"){
      if (!searchString[1]) return message.channel.send('Mengubah Teks ke Kode Morse.\nKetik `h.morsee [Teks]` tanpa `[]`.')
       const translate = morse.encode(searchString)
        const embed = new MessageEmbed()
        .setTitle('Morse Encode (Teks - Morse)')
        .setColor('BLUE')
        .addField('Teks', searchString, false)
        .addField('Morse', `\`${translate}\``, false)
        .setFooter(`Hi ${message.author.username} | Alternatif : \`h.morsee\``, message.author.avatarURL())
        message.channel.send(embed)
       message.channel.send(`\`${translate}\``)
    } else if (command === "morse-decode" || command === "morsed"){
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
  } else if (command === "spam" && message.author.id === owner){
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
    message.channel.send(`${searchString}`)
  }
  if (command === "smug"){
    const { Random } = require("something-random-on-discord");
  const random = new Random();
    let data = await random.getAnimeImgURL("smug");
    message.channel.send(data);
  }
  if (command == "redid"||command === "reddit"){
     const redditimage = require("reddit.images");
        if(!searchString[0]) return message.reply("**Please provide a subreddit.**")
        const subreds = searchString
        
        const redditResult = await redditimage.fetch({
             type: "custom",
             subreddit: [subreds],
        })
        const color = message.guild.me.displayHexColor
        
       const reddit = new MessageEmbed()
        .setTitle(redditResult[0].title)
        .setURL(redditResult[0].postLink)
        .setImage(redditResult[0].image)
        .setDescription(`👍 **${redditResult[0].upvotes}** | 👎 **${redditResult[0].downvotes}**`)
        .setAuthor(`r/${subreds}`, "https://cdn.discordapp.com/attachments/799226474640048149/799273472990642196/2018_social_media_popular_app_logo_reddit-512.png", redditResult[0].postLink)
        .setColor(color)
        .setFooter(`If the image didn't load click the title.`, message.guild.iconURL({ dynamic: true }))
       message.channel.send(reddit)
  }
  if(command === "joke"){
    const konm = require("something-random-on-discord").Random;
     let data = await konm.getNameJoke(`${message.author.username}`, `${searchString}`)
    message.channel.send(data)
  }
  if (command === "sudo"){
     if(!searchString) return message.channel.send("||ndak tau udah||")
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.reply("Can't find this user")
    message.delete()
    message.channel.createWebhook(member.user.username, {
      avatar: member.user.displayAvatarURL({ dynamic: true})
    }).then(webhook => {
      webhook.send(args.join(' ').slice(29))
      setTimeout(() => {
          webhook.delete()
      }, 600000)
    })
    let log = bot.channels.cache.get('840513794119434271')
              let d = new MessageEmbed()
                .setColor('GREEN')
                .setAuthor('- Sudo Commands -', message.author.displayAvatarURL({format: 'png'}))
                .addFields(
                    { name: 'From', value: `<@${message.author.id}>`},
                    { name: 'Target', value: `<@${member.user.id}>`},
                    { name: 'Channel', value: `<#${message.channel.id}>`},
                    { name: 'Content', value: args.join(' ').slice(29)}
                )
                .setFooter(`si ${message.author.username} ngapus pesan`)
                .setTimestamp()
                log.send(d)
  }
  if (command === "webh"){
    message.channel.fetchWebhooks()
  .then(webhooks => {
      let p = webhooks.filter(webhook => webhook.name === 'MEE6 Webhooks')
      message.channel.send(`${webhooks.map(webhook => webhook.name).join(", ")}`)
      console.log(`Fetched ${webhooks.size} webhooks`)
    })
  .catch(console.error);
  }
    if (command === 'wdel'){
      message.channel.fetchWebhooks()
  .then(webhooks => {
      let p = webhooks.filter(webhook => webhook.name !== 'MEE6 Webhooks')
      for (let [name, webhook] of p) webhook.delete(`Requested by ${message.author.tag}`)
        message.channel.send('||sudo webhook has reseted :thumbsup:||')
    })
    .catch(console.error)  
    }
  if (command === "servers"){
    let p = new MessageEmbed()
    .setColor('GOLD')
  .setAuthor(`Servers im join`)
  .setDescription(bot.guilds.cache.map(guild => guild.name).join("*,\n*"))
  .setTimestamp()
  .setFooter(`Noob bot`)
message.channel.send(p).catch(console.error)
  }
  if (command === "wiki"){
    if (!searchString) return message.channel.send('mau cari ap ngab?')
    let web = `https://id.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchString}&format=json`
    const got = require('got')
    let data = await got(web).then(res => JSON.parse(res.body))
    let e = new MessageEmbed()
    .setAuthor('Wikipedia', 'https://upload.wikimedia.org/wikipedia/commons/d/de/Wikipedia_Logo_1.0.png')
    .setTitle(data.query.search[0].title)
    .setColor('WHITE')
    .setDescription(data.query.search[0].snippet.replace('<span class="searchmatch">', " "))
    .setFooter('https://id.wikipedia.org')
    message.channel.send(e)
    message.channel.send('biasa gaje')
  }
  if (command === "kbbi"){
    if (!searchString) return message.channel.send('mau cari ap ngab?')
    let web = `https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${searchString}`
    const got = require('got')
    let data = await got(web)
    .then(res => JSON.parse(res.body))
    .catch(e => message.channel.send(e))
    let e = new MessageEmbed()
    .setTitle(data.lema)
    .setDescription(data.arti)
    .setColor('BLUE')
    message.channel.send(e)
      .catch(console.error)
  }
  if (command === "test"){
    message.channel.send(`${searchString[0]} | ${searchString[1]} | ${searchString[2]} | ${searchString}`)
    message.channel.send(`${args[0]} | ${args[1]} | ${args[2]} `)
  }
  if (command === "manga"){
    if (!searchString) return message.channel.send('mau cari ap ngab?')
      if (args[1] === "recomm"){
      let web = `https://mangamint.kaedenoki.net/api/recommended`
      const got = require('got')
      let data = await got(web)
      .then(res => JSON.parse(res.body))
      .catch(e => message.channel.send(e))
      let r = Math.floor(Math.random() * 11);
      let p = new MessageEmbed()
      .setTitle(data.manga_list[r].title)
      .setDescription(`Baca di [Komiku](https://komiku.id/manga/${data.manga_list[r].endpoint})`)
      .setImage(data.manga_list[r].thumb)
      .setColor('BLUE')
      const edid = await message.channel.send(p)
    }
    if (args[1] === "search"){
      let web = `https://mangamint.kaedenoki.net/api/search/${args[2]}`
      const got = require('got')
      let data = await got(web)
      .then(res => JSON.parse(res.body))
      .catch(e => message.channel.send(e));
      let poi = `https://mangamint.kaedenoki.net/api/manga/detail/${data.manga_list[1].endpoint}`
      let ple = await got(poi)
      .then(res => JSON.parse(res.body))
      let mb = new MessageEmbed()
    .setAuthor(`${ple.title}`)
    .setURL(`https://komiku.id/manga/${ple.manga_endpoint}`)
    .setDescription(`${ple.synopsis}\n\n**Type  :** ${ple.type}\n**Author :** ${ple.author}\n**Status :** ${ple.status}\n**Genre :** ${ple.genre_list[0].genre_name}, ${ple.genre_list[1].genre_name}, ${ple.genre_list[2].genre_name}\n**Chapter Terbaru :**\n- [${ple.chapter[0].chapter_title}](https://komiku.id/c/${ple.chapter[0].chapter_endpoint})`)
    .setImage(ple.thumb)
    .setColor('BLUE')
    .setFooter('Beri ulasan ke saya dgn react! | Komiku.id', message.author.displayAvatarURL())
    const haha = await message.channel.send(mb)
    }
  }
  if (command === "spams" && message.author.id == owner){
    message.delete({timeout : 100})
     const spp = await message.channel.send(`${searchString}`)
     spp.channel.send(`${searchString}`)
   spp.delete({timeout : 100})
    spp.channel.send(`${searchString}`)
   spp.delete({timeout : 100})
     spp.channel.send(`${searchString}`)
   spp.delete({timeout : 100})
    spp.channel.send(`${searchString}`)
   spp.delete({timeout : 100})
    spp.channel.send(`${searchString}`)
   spp.delete({timeout : 100})
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
        let p = new MessageEmbed()
        .setDescription('Lebih baik langsung di channelny ae :/\n\nGatau channelny?, tanya paris')
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
            return message.channel.send('Please Give Me 2nd Choice. jgn lebih :/')
        };

        if (searchString.toLowerCase().endsWith(" ")) {
            return message.channel.send('Please Give Me 2nd Choice!. jgn lebih :/')
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
            .setAuthor(bot.user.username, message.author.displayAvatarURL())
            .setTitle('Command List')
            .setDescription(`
 **Maintenance <:ndaktau:831494322901352498>**
 \`h.wasted\` \`h.ytc\` \`h.waifu\`
 \`h.fact\`

_**>> New Commands**_
 \`h.userinfo\` \`h.respect\` \`h.echo\`
 \`h.anime\` \`h.search\` \`h.ss\`
 \`h.smug\` \`h.reddit\` \`h.sudo\`

**ndak tau**
 \`h.ask\` \`h.spam\` \`h.images\`
 \`h.ping\` \`h.avatar\` \`h.morse\`
 \`h.say\` \`h.wink\` \`h.adzan\` 
 \`h.choose\` \`h.wangy\` \`h.wikihow\`

**Music**
 \`h.play\` \`h.search\` \`h.skip\`
 \`h.stop\` \`h.pause\` \`h.resume\`
 \`h.nowplaying\` \`h.queue\` \`h.volume\`
 \`h.lyrics\`
 `)
        if (message.author.id === owner){
          helpembed.addField(`<a:790481697145225237:812973632799244318> only for ma honey <a:790481697145225237:812973632799244318>`, `\`h.webh\`  \`h.wdel\``)
        };
            helpembed.setThumbnail(bot.user.displayAvatarURL())
            helpembed.setFooter("bot paris", message.author.avatarURL);
          message.channel.send(helpembed).catch(console.error)
 
        }
  if (command === "ytmp3"){
    if (!searchString) return message.channel.send('Masukkan link youtube. Link harus berformat `https://youtu.be/`')
    if (searchString === "https://youtube.com/") return ('Link harus berformat `https://youtu.be`.\nContoh : `https://youtu.be/dQw4w9WgXcQ`')
    const got = require('got')
    const url = `https://hadi-api.herokuapp.com/api/ytaudio?url=${searchString}`
        let dat = await got(url)
        .then(res => JSON.parse(res.body))
    try {
      let att = new MessageEmbed()
    .setTitle(dat.result.title)
    .setURL(`${dat.result.download_audio}`)
    .setDescription(`[**Tekan untuk mendownload!**](${dat.result.download_audio})\n\n------------------------------------${dat.result.desc}`)
    .setColor('#2F3136')
    message.channel.send(att)
    
       } catch (e) {
           return message.channel.send(`Error ngab`)
       }
  }
  if (command === "ytdl"){
    if (!searchString) return message.channel.send('Masukkan link youtube. Link harus berformat `https://youtu.be/`')
    if (searchString === "https://youtube.com/") return ('Link harus berformat `https://youtu.be`.\nContoh : `https://youtu.be/dQw4w9WgXcQ`')
    const got = require('got')
    const url = `https://hadi-api.herokuapp.com/api/ytvideo?url=${searchString}`
        let dat = await got(url)
        .then(res => JSON.parse(res.body))
    try {
      let att = new MessageEmbed()
    .setTitle(dat.result.title)
    .setURL(`${dat.result.download_video}`)
    .setDescription(`[**Tekan untuk mendownload!**](${dat.result.download_video})\n\n------------------------------------\n${dat.result.desc}\n\n[**DOWNLOAD LINK**](dat.result.download_video) `)
    .setColor('#2F3136')
    message.channel.send(att)
    
       } catch (e) {
           return message.channel.send(`Error ngab`)
       }
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
