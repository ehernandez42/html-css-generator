import chalk from "chalk";
import { input, select } from "@inquirer/prompts";
import { Command } from "commander";
import inquirer from "inquirer";
import * as fs from "fs";

const program = new Command();

console.log(chalk.bgCyanBright.black("Welcome to HTML-CSS Generator! Let's get started."))


program
    .version("1.0.0")
    .description("CLI tool that imports starter, pre-made components");
const options = program.opts();

const answer = await input({ message: "What is your name?"});

console.log(`Hello, ${answer}! Pick from the following below: `);


//this is what GPT came up with? idk..
program
    .command('paste')
    .description('Paste content into the current file.')
    .action(async () => {
        try {
            // Prompt the user for the content to paste
            const { content } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'content',
                    message: 'Enter the content to paste:',
                },
            ]);

            // Read the content of the current file
            const currentFileContent = fs.readFileSync('./currentFile.txt', 'utf-8');

            // Append the user's content to the current file content
            const newContent = `${currentFileContent}\n${content}`;

            // Write the updated content back to the file
            fs.writeFileSync('./currentFile.txt', newContent);

            console.log(chalk.green('Content pasted successfully!'));
        } catch (error) {
            console.error(chalk.red('Error pasting content:', error));
        }
    });
/*
- the different list of choices
- should probably set them up as an array of objects that represent the
  each of the pre-made elements
- after this, I guess the next thing is to figure out how to let the module
  paste the object into the current file it is on?
*/


//commented out cause its screaming in error
// const elementChoices = await select({
// })
