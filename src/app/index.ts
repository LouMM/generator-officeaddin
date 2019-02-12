import Generator, { Question } from 'yeoman-generator';

import { host, hosts } from './config/hosts';
import { projectType, projectTypes } from './config/projects';


module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args: string | string[], options: {}) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, options);

    // Next, add your custom code

    //this.option('babel'); // This method adds support for a `--babel` flag

  }

  async prompting() {
    let hosts: host[] = [{
      displayName: "Excel",
      repository: ""

    }];

    let projects: projectType[] = [{
      name: "excel-functions",
      displayName: "Excel Custom Functions Add-in project (Requires the Insider channel for Excel)",
      templates: [{
        name: "typescript",
        repository: "https://github.com/OfficeDev/Excel-Custom-Functions-JS",
        branchName: "yo-office"
      }]
    },
    {
      name: "jquery",
      displayName: "Office Add-in project using Jquery framework",
      templates: [{
        name: "typescript",
        repository: "https://github.com/OfficeDev/Excel-Custom-Functions-JS",
        branchName: "yo-office"
      }]
    }]


    let pjs = JSON.stringify(projects);
    let x = projectTypes.deserialize(pjs);
    

    
    const self: this = this;
    this.log('What is THIS right now: ' + JSON.stringify(this));
    let usrAnswer = await this.prompt({
      type: 'input',
      name: 'username',
      message: 'What\'s your GitHub username',
      store: true
    });
    
    
    this.log(JSON.stringify(usrAnswer));
  }

};