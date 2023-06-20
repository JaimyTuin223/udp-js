module.exports.run = async (client, message, args) => {

    message.channel.send("This bot is a test project made by @jaimytuin, to see how UDP could be utilized via a discord bot.\r\n\nFor questions DM @jaimytuin")
  
}
  
  module.exports.help = {
      name: "help",
      category: "general", 
      description: "Simple help msg.",
      aliases: []
  }
