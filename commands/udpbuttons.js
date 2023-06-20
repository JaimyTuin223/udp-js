const discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    if(message.author.id != '755010613360459866') return message.reply(`Sorry you can't run this command.`);

    const udpRow = new discord.MessageActionRow().addComponents(

        new discord.MessageButton()
            .setCustomId("ScoreT1add")
            .setLabel("T1 add")
            .setStyle("PRIMARY"),

        new discord.MessageButton()
            .setCustomId("ScoreT2add")
            .setLabel("T2 add")
            .setStyle("PRIMARY"),

            new discord.MessageButton()
            .setCustomId("TeamReset")
            .setLabel("Reset")
            .setStyle("PRIMARY")

    )

    let udpMessage = "undefined"

    message.channel.send({content: "UDP buttons", components: [udpRow]}).then(async msg => {

        let returned = false

        const filter = (interaction) => {
            if (interaction.user.id === message.author.id) return true;
            returned = true
            return interaction.reply({content: "Sorry, you can't use this button.", ephemeral:true});
        }
        if (returned) return

        const collector = msg.createMessageComponentCollector({ // message.channel.createMessageComponentCollector({
            filter,
            max: 10000
        });

        collector.on("collect", (interaction) => {
            if (interaction.message.id == msg.id) {

                const id = interaction.customId;
                interaction.deferUpdate().catch(err => {})

                switch (id) {
                        case "ScoreT1add":
                        	  udpMessage = "88813_ScoreT1add"
                        break;
    
                        case "ScoreT2add":
                            udpMessage = "88813_ScoreT2add"
                        break;

                        case "Reset":
                            udpMessage = "88813_Reset"
                        break;

                    }

                    const UDP = require('dgram')

                    const UDPclient = UDP.createSocket('udp4')
                
                    const port = 2222 // The port its send to (For BS = 22222)
                
                    const hostname = '192.168.50.7' // The IP it has to send to (For BS = 192.168.0.254)
                
                    UDPclient.on('message', (message, info) => {
                      // get the information about server address, port, and size of packet received.
                
                    console.log('Address: ', info.address, 'Port: ', info.port, 'Size: ', info.size)
                
                      //read message from server
                
                      console.log('Message from server', message.toString())
                    })
                
                    const packet = Buffer.from(`${udpMessage}`)
                
                    UDPclient.send(packet, port, hostname, (err) => {
                    if (err) {
                        console.error('Failed to send packet !!')
                    } else {
                        console.log(`Packet send !! - ${udpMessage}`)
                    }
                })
              } // else return;
          });

    })

}

module.exports.help = {
    name: "udpbutton",
    category: "general",  /* general, information, moderation or testing - if set to invalid category, it won't display. */
    description: "Send UDP messages when a button is clicked.",
    aliases: []
}
