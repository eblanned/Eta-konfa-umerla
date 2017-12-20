const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", (message) => {
  if (message.content.includes("@everyone"))
  {
	var x = 0 + Math.random() * (5 - 0)
    x = Math.round(x);
	switch (x) {
		case 0:
		message.channel.send("https://imgur.com/zPSvtPq");
		break;

		case 1:
		message.channel.send("https://i.imgur.com/GZpO5GD.jpg");
		break;

		case 2:
		message.channel.send("https://i.imgur.com/tOWPFED.jpg");
		break;

		case 3:
		message.channel.send("https://i.imgur.com/Z0gre95.jpg");
		break;

		case 4:
		message.channel.send("https://i.imgur.com/4e4DkQH.png");
		break;

		default:
		message.channel.send("https://imgur.com/zPSvtPq");
		}

    //message.channel.send("https://imgur.com/zPSvtPq");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
