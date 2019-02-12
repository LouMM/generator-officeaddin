import { Question, Questions } from 'yeoman-generator';
import * as Collections from 'typescript-collections';

export enum actionstate{
    Unavailable,
    Idle,
    Started,
    Completed,
    Error
}

type ActionName = string;
export class Action {
    state:actionstate = actionstate.Idle;
    dependentActions:Collections.Bag<ActionName>;
    

    constructor() {
        this.dependentActions = new Collections.Bag();
    }

}

export class ProjectTypePrompt {
    constructor() {
        this.initialize();
    }
    initialize() {
        this.questions = new Array<Question>(
            {
                name: "projectType",
                message: 'Choose a project type:',
                type: 'list',
                default: 'React'
               
            }
        );

        let s:Action = new Action();
        
        

    }
    questions: Questions = [];
    //list dependent Actions
    //Stores it's state
    //Lives in a lookup index of actions
    //One Action per action instance object
    //Can be loaded dynamically via GIT or NPM
    //
}


export class ActionIndex extends Map<ActionName,Action >
{
    private static _instance = new ActionIndex();
    private constructor(){super();}
    public static getInstance() : ActionIndex{
        return this._instance;
    }

    public static getAction(actionName:ActionName): Action | undefined {
        let action:Action | undefined = this._instance.get(actionName)
        return action;        
    }

}