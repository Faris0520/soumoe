  const commands = await getapp(guild)
  .commands.get()
  console.log(commands)
  
  await getapp(guild).commands.post({
    data:{
      name: 'ping',
      description: 'Ping the bot',
    }
  })
  
  await getapp(guild.commands.post({
    data:{
      name: 'embed',
      description: 'Menulis ke Embed',
      options: [
        {
          name: 'Name',
          description: 'ur name',
          required: true,
          type: 3 //string
        },
        {
          name: 'age',
          description: 'ur age',
          required: false,
          type: 4 //integer
        }
      ]
    }
  }))
  bot.ws.on('INTERACTION_CREATE', async (interaction) => {
     const {name, options} = interaction.data
    const command = name.toLowerCase()
    const args = {}
   console.log(options)
    if (options){
      for (const option of options){
        const {name, value} = option
        args[name] = value
      }
    }
    console.log()
    if (command === 'ping'){
      reply(interaction, 'pong')
    }
  })
  const reply = (interaction, response) => {
    bot.api.interactions(interaction.id, interaction.token).callback.post({
        data:{
          type: 4,
          data: {
            content: response,
          }
        }
      })
  }
  