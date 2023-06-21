const { hostname, port } = require('../botConfig.json')

module.exports.run = async (client, message, args) => {

  if (message.author.id != '755010613360459866') return message.reply(`Sorry you can't run this command.`); // Makes it so only a certain UserID can use the command.


  // UDP

  const UDP = require('dgram')

  const UDPclient = UDP.createSocket('udp4')

  if (!args.join(' ')) return "Please enter a msg" // If user didn't include a message after the command, return this.

  const udpMessage = args.join(' ')  // Define udpMessage as the args of the command

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
      console.log('Packet send !!')
    }
  })

}

module.exports.help = {
  name: "udp",
  aliases: []
}
