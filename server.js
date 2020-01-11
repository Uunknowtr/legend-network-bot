const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const express = require('express');
const app = express();
const Playing = require("discord-playing");


app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);                            /// example how to keep your bot 24/7
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 2800);
 var request = require('request');
var mcCommand = '!server'; // Command for triggering
var mcIP = '178.20.229.239'; // Your MC server IP or hostname address
var mcPort = 25565; // Your MC server port (25565 is the default)


 


client.on('message', message => {
    if (message.content === mcCommand) {
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply(' ** ```css\nℒ LEGEND CRAFT ℒ\n``` **\n```fix\n - Server bilgilerine ulasirken bir sorun ile karsilasildi ! \n```  ');
            }
            body = JSON.parse(body);
            var status = ' ** ```css\nℒ LEGEND CRAFT ℒ\n``` **\n```fix\n- Server durumu = BAKIMDA ! \n```  ';
            if(body.online) {
                status = ' ** ```css\nℒ LEGEND CRAFT ℒ\n``` **\n```fix\n- Server durumu = AKTIF \n```  ';
                if(body.players.now) {
                    status += '```fix\n- Aktif oyuncu sayısı = [' + body.players.now + '] Kişi oynuyor!\n```';

                } else {
                    status += '```fix\n - Aktif oyuncu sayısı = Aktif oyuncumuz yok :)\n```';

                }
            }
            message.reply(status);
        });
    }
});

client.on('ready', () => {
  console.log(`Süper bot ${client.user.tag} sunucuya bodoslama girdi!`);
    client.user.setStatus('online')
    client.user.setPresence({
        game: {
            name: 'yardım için !lnwbilgi',
            type: "WATCHING",
            url: "https://discordapp.com/"
        }
    });
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!ip'||msg.content.toLowerCase() === '!İP') {
    msg.reply('```css\n- Sunucu IP adresimiz ;```\n```diff\n- Play.LegendTR.Cf```');
  }
});

  client.on('message', msg => {
    if (msg.content.toLowerCase() === '!lnwbilgi') {
      msg.channel.sendMessage('```diff\n- LEGEND NETWORK - BOT [KOMUTLAR]```\n```css\n! - lnwbilgi = (Butun komutlari siralar.)\n! - ip = (Sunucumuzun IP adresini verir.)\n! - server = (Sunucunun anlik bilgilerini verir.)\n```');
    }
  });

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
      msg.reply('Ve Aleyküm Selam');
    }
});















client.login('NjY1Mjk1NzUxMDM4ODk0MDky.XhkMEw.AxeTWIXBRQIFCT8oMsk6cwupRaI');
