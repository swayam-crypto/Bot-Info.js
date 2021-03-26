var commando = require('discord.js-commando');
var discord = require('discord.js');

class aboutuser extends commando.Command 
{
    constructor(client) {
        super(client, {
            name: 'bot-info',
            group: 'guild',
            memberName: 'abot-info',
            description: 'Lists information about a specific user.',
            aliases: ['bi', 'boti', 'binfo', 'bot'],
        })
    }
async run(message, args){

    let userinfo = {};
    userinfo.bot = message.client.user.bot;
    userinfo.createdat = message.client.user.createdAt;
    userinfo.discrim = message.client.user.discriminator;
    userinfo.id = message.client.user.id;
    userinfo.mfa = message.client.user.mfaEnabled;
    userinfo.pre = message.client.user.premium;
    userinfo.presen = message.client.user.presence;
    userinfo.tag = message.client.user.tag;
    userinfo.uname = message.client.user.username;
    userinfo.verified = message.client.user.verified;

    userinfo.avatar = message.client.user.avatarURL;

    var myInfo = new discord.MessageEmbed()
        .setAuthor(userinfo.uname, "https://cdn.discordapp.com/avatars/822484015801040896/615a3ef2637eba811eccf2995106f33a.png")
        .addField("`Bot?`",userinfo.bot, true)
        .addField("`Created At`","Fri Mar 19 2021", true)
        .addField("`Discriminator`",userinfo.discrim, true)
        .addField("`Client ID`",userinfo.id, true)
        .addField("`2FA/MFA Enabled?`",userinfo.mfa, true)
        .addField("`Presence`",userinfo.presen, true)
        .addField("`Client Tag`",userinfo.tag, true)
        .addField("`Username`",userinfo.uname, true)
        .addField("`Verified?`",userinfo.verified, true)
        .setColor(0xf0e5da)
        .setFooter('Created By -> IG🔰VOLT™ | ΜΔĐ乛TeamIG™#8929 since', "https://cdn.discordapp.com/avatars/689388891106705467/a_fdad411f1a344a374ac6dbd8089607be.gif")
        .setTitle("INFORMATION ABOUT `WoW Music`")
        .setThumbnail("https://cdn.discordapp.com/avatars/822484015801040896/615a3ef2637eba811eccf2995106f33a.png")
        .setTimestamp(userinfo.createdat)


        message.channel.send(myInfo);

}

}
module.exports = aboutuser;
