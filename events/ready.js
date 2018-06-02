exports.run = async(client, message, args) => {
    client.user.setPresence({ game: { name: "Anything", type:  1} });
}