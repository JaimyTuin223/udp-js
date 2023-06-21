const discord = require("discord.js")
const { hostname, port } = require('../botConfig.json')

module.exports.run = async (client, message, args) => {

    if (message.author.id != '755010613360459866') return message.reply(`Sorry you can't run this command.`);

    const udpRow = new discord.MessageActionRow().addComponents( // Creating the button row

        new discord.MessageButton()
            .setCustomId("Button1")
            .setLabel("Option 1")
            .setStyle("PRIMARY"),

        new discord.MessageButton()
            .setCustomId("Button2")
            .setLabel("Option 2")
            .setStyle("PRIMARY"),

        new discord.MessageButton()
            .setCustomId("Button3")
            .setLabel("Option 3")
            .setStyle("PRIMARY")

    )

    let udpMessage = "undefined"

    message.channel.send({ content: "UDP buttons", components: [udpRow] }).then(async msg => {

        let returned = false

        const filter = (interaction) => {
            if (interaction.user.id === message.author.id) return true;
            returned = true
            return interaction.reply({ content: "Sorry, you can't use this button.", ephemeral: true });
        }
        if (returned) return

        const collector = msg.createMessageComponentCollector({ // message.channel.createMessageComponentCollector({
            filter,
            max: 10000
        });

        collector.on("collect", (interaction) => {
            if (interaction.message.id == msg.id) {

                const id = interaction.customId;
                interaction.deferUpdate().catch(err => { })

                switch (id) {
                    case "Button1":
                        udpMessage = "Message1"
                        break;

                    case "Button2":
                        udpMessage = "Message2"
                        break;

                    case "Button3":
                        udpMessage = "Message3"
                        break;

                }

                const UDP = require('dgram')

                const UDPclient = UDP.createSocket('udp4')

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
            }
        });

    })

}

module.exports.help = {
    name: "udpbutton",
    aliases: []
}
