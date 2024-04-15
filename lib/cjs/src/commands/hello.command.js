"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
function hello_command() {
    var command = new commander_1.Command();
    return command
        .command('commands')
        .description('Show available commands')
        .action(function () {
        console.log("\nAvailable commands:\n$ fromjson");
    });
}
exports.default = hello_command;
