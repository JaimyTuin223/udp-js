module.exports.run = async (client, message, args) => {

  if(message.author.id != '755010613360459866') return message.reply(`Sorry you can't run this command.`); // Makes it so only a certain UserID can use the command.


    // UDP

    const UDP = require('dgram')

    const UDPclient = UDP.createSocket('udp4')

    const port = 2222 // The destination port

    const hostname = '192.168.50.7' // The destination IP-adres

    if (!args[0]) return "Please enter a msg" // If user didn't include a message after the command, return this.

    const udpMessage = args[0]  // Define udpMessage as the args of the command

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
    category: "general",  /* general, information, moderation or testing - if set to invalid category, it won't display. */
    description: "send udp.",
    aliases: []
}
