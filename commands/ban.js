module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    async execute(message, args){

        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("Missing Permissions!").then(m => m.delete(5000));
        }
    

        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send(`You coudn't ban that member!`);
        }
    }
}