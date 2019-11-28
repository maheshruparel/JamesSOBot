module.exports = function (bot) {
    bot.addCommand({
            name: "status",
            args: [],
        description: "Used to check if the bot is alive.",
            shortcuts: [
                "status",
                "poke",
                "test"
            ],
        examples: ["|| status"],
            ignore: false,
            permissions: ["all"],
            func: (msg) => {
                msg.roomContext.send(`I am currently alive!`);
            }
        },
    )
};

/**
 * Used to check if the bot is alive.
 *
 * @return {String} - describes status
 */
function status() {
}
