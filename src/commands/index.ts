import { Command } from 'commander';

import { version as appVersion } from '../../package.json';
import cli from '../assets/cli.json';
import helloCommand from './hello.command';

new Command()
	.name('packager')
	.version(appVersion, '-v, --version', 'output the current version')
	.description(cli.default.description)
	.summary(cli.default.summary)
	.addHelpCommand(false)
	.addCommand(helloCommand())
	.parse();
