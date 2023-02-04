module.exports.run = async (client, message, args) => {

    message.channel.send("This bot is made by @ThatGamingGinger.\r\nWith the purpose of making my UDP system be accessible via discord msgs and buttons.\r\n\nFor questions DM @ThatGamingGinger")
  

}
  
  module.exports.help = {
      name: "help",
      category: "general",  /* general, information, moderation or testing - if set to invalid category, it won't display. */
      description: "Check the bots latency.",
      aliases: []
  }