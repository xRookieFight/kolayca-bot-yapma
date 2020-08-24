/* Merhabalar, ben xRookieFight. Yaptığım kolayca bot yapma projesini size sunuyorum.
 Sadece istediğim şey projemin çalınmamasını istiyorum. 
 Eğer kurulum yapamadıysanız Discord xRøokieFight#0001 ulaşın kurulumunu yaparım. 
 Eğer bir hata varsa github sayfasından Create Issue seçeneğine tıklıyarak yapabilirsiniz.
 İyi günler. */
const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
client.on('ready', () => {
console.log('Aktif!')
client.user.setActivity(`Prefixim: ${config.prefix}`)
})
client.on('message', msg => {
if (msg.content.toLowerCase() === 'sa') {
msg.channel.send('Aleyküm selam hoşgeldin!')
}
if (msg.content === `${config.prefix}yardım`)
 msg.channel.send('Henüz komutum yok :(')
});
client.on('guildMemberAdd', member => {
  const Kolayca_Bot_Yapimi = new Discord.RichEmbed()
  member.addRole(config.otomatikrolid)
  .setTitle(config.sunucuismi)
  .setAuthor('Otorol verildi.')
  .setDescription(`**📤 ${member} adlı üyeye başarıyla otomatik rol verildi.**`)
  client.channels.get(config.otorolkanalid).send(Kolayca_Bot_Yapimi)
  const by_xRookieFight = new Discord.RichEmbed()
  .setTitle(config.sunucuismi)
  .setAuthor('Bir üye katıldı!')
  .setDescription(`📤 ${member} adlı üye sunucuya katıldı! 📤`)
client.channels.get(config.giriscikiskanalid).send(by_xRookieFight)
})
client.on('guildMemberRemove', member => {
  const cikiskanal = new Discord.RichEmbed()
  .setTitle(config.sunucuismi)
  .setAuthor('Bir üye ayrıldı!')
  .setDescription(`📤 ${member} adlı üye sunucudan ayrıldı! 📤`)
client.channels.get(config.giriscikiskanalid).send(cikiskanal)
})


client.login(config.token)
