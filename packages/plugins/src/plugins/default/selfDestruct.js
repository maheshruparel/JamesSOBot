module.exports = function (bot) {
    bot.addCommand({
        name: "suicide",
        args: [],
        description: "Ends the bot's node process.",
        shortcuts: [
            "die",
            "destroy",
            "selfdestruct",
            "suicide",
            "reboot",
            "restart",
            "just_do_it",
            "shutdown",
        ],
        examples: ["|| sudo restart"],
        ignore: false,
        permissions: ["admin"],
        func: (msg) => {
            if (!msg.sudo) {
                msg.roomContext.send("Try `sudo`");
                return;
            }
            msg.roomContext.send("My life has come to end. I hope to be revived soon.").then(_ => {
                bot.shutdown(msg);
            });
        }
    });
};

/**
 * Ends the bot's node process.
 *
 * Alias:
 *
 * - `sudo kill self`
 *
 * **Requires:** `sudo`
 */
function die(min, max) {
}