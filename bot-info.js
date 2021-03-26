const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AboutUserCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'bots-info',
      memberName: 'bots-info',
      group: 'other',
      description: 'Lists information about the bot.',
      aliases: ['bi', 'boti', 'binfo', 'bot']
    });
  }

  run(message) {
    const userInfo = {
      bot: message.client.user.bot,
      createAt: message.client.user.createdAt,
      discriminator: message.client.user.discriminator,
      id: message.client.user.id,
      mfa: message.client.user.mfaEnabled,
      premium: message.client.user.premium,
      presence: message.client.user.presence,
      tag: message.client.user.tag,
      userName: message.client.user.username,
      verified: message.client.user.verified,
      avatar: message.client.user.avatarURL
    };

    const myInfo = new MessageEmbed()
      .setTitle(`INFORMATION ABOUT '${this.client.user.username}'`)
      .setAuthor(userInfo.userName, this.client.user.displayAvatarURL())
      .setThumbnail(this.client.user.displayAvatarURL())
      .setColor('#F0E5DE')
      .addField('Bot?', userInfo.bot, true)
      .addField('Created At', `${userInfo.createAt.toLocaleString()}`, true)
      .addField('Discriminator', userInfo.discriminator, true)
      .addField('Client ID', userInfo.id, true)
      .addField('2FA/MFA Enabled?', userInfo.mfa, true)
      .addField('Presence', userInfo.presence, true)
      .addField('Client Tag', userInfo.tag, true)
      .addField('Username', userInfo.userName, true)
      .addField('Verified?', userInfo.verified, true)
      .setFooter(
        `Created By -> '${this.client.owners[0].username}' since`,
        this.client.user.avatarURL()
      )
      .setTimestamp(userInfo.createdAt);

    message.channel.send(myInfo);
  }
};
