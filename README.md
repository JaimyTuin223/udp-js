
# UDP bot system

UDP messaging system built into a discord bot. This project was made as a test, to try and see how UDP could be used via a discord bot. (Made with the help from https://nodejs.org/api/dgram.html)

UDP receiver can be found [here](https://github.com/JaimyTuin223/UDP-receiver)
UDP sender without discord bot can be found [here](https://github.com/JaimyTuin223/UDP-sender)

##### NOTE: UDP only works when both the sending and receiving code are on the same network, If you wish to send packets outside your own network you can set up Port forwarding on both routers.


## Installation

Installing the correct packages can be done with the following npm command:

```bash
  npm i
```
Don't forget to add your Bot Token, Destination IP and Destination Port inside `botconfig.json`:

```json
{
    "token": "TOKEN_HERE",
    "prefix": ".",
    "hostname": "DESTINATION_IP",
    "port": 2222
}
```
##### To be able to run this code locally your device will need to have Node.JS installed, which can be found [here](https://nodejs.org/en/download)
    
## Deployment

To deploy this project run

```bash
  npm start
```


## Features

- Discord.JS v13 (I will release a Discord.js v14 version later.)
- Simple command handler
- UDP messaging system
- Code explanation 


## Feedback

If you have problems, feedback, or have had any other annoying occurrences please join my discord server [here](https://discord.gg/8KxqWAKCPe)

#### If you don't feel like joining the server feel free to dm me on discord (@jaimytuin) or email jaimytuinyt@gmail.com.

