"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
function hello_command() {
    const command = new commander_1.Command();
    return command
        .command('commands')
        .description('Show available commands')
        .action(() => {
        console.log(`\nAvailable commands:\n$ fromjson`);
    });
}
exports.default = hello_command;
//# sourceMappingURL=hello.command.js.map