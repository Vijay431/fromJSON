import { Command } from 'commander';

export default function hello_command(): Command {
	const command = new Command();

	return command
		.command('commands')
		.description('Show available commands')
		.action(() => {
			console.log(`\nAvailable commands:\n$ fromjson`);
		});
}
