
# UDP bot system

UDP messaging system built into a discord bot. This project was made as a test, to try and see how UDP could be used via a discord bot. (Made with the help from https://nodejs.org/api/dgram.html)

I'm currently working on getting the UDP receiver public too, but it needs some modifications.

##### NOTE: Both the hosting and receiving devices must be in the same network.


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

#### If you don't feel like joining the server feel free to dm me on discord (@jaimytuin) or send me an email jaimytuinyt@gmail.com.

