"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const commander_1 = require("commander");
const package_json_1 = require("../../package.json");
const cli_json_1 = tslib_1.__importDefault(require("../assets/cli.json"));
const hello_command_1 = tslib_1.__importDefault(require("./hello.command"));
new commander_1.Command()
    .name('packager')
    .version(package_json_1.version, '-v, --version', 'output the current version')
    .description(cli_json_1.default.default.description)
    .summary(cli_json_1.default.default.summary)
    .addHelpCommand(false)
    .addCommand((0, hello_command_1.default)())
    .parse();
//# sourceMappingURL=index.js.map