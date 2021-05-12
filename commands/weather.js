const weather = require("weather-js");
const Discord = require("discord.js");

module.exports = {
    name: "clearchat",
    aliases: ["cc"],
    execute(client, message, args){

        let degreetype = "C";
       let city = args.join(" ");

      weather.find({search: city, degreeType: degreetype}, function(err, result) {
        if (!city) return message.channel.send("Please insert the city name.");
        if (err || result === undefined || result.length === 0) return message.channel.send("Unknown city. Perhaps a typo or maybe not a city?");

        let current = result[0].current;
        let location = result[0].location;

        const embed = new Discord.MessageEmbed()
        .setAuthor(current.observationpoint)
        .setDescription(`${current.skytext}`)
        .setThumbnail(current.imageUrl)
        .setTimestamp()
        .setColor(0x7289DA)

        embed.addField("Latitude", location.lat, true)
        .addField("Longitude", location.long, true)
        .addField("Feels Like", `${current.feelslike}° Degrees`, true)
        .addField("Degree Type", location.degreetype, true)
        .addField("Humidity", `${current.humidity}%`, true)
        .addField("Temperature", `${current.temperature}° Degrees`, true)
        .addField("Observation Time", current.observationtime, true)
        .addField("Winds", current.winddisplay, true)
        .addField("Timezone", `GMT ${location.timezone}`, true)

        return message.channel.send(embed);
    })
}};