import { projectTypes } from "./projects";
import { hosts } from "./hosts";

export class GeneratorConfig {
    hostTypes : hosts ;
    projectTypes: projectTypes;
    
    constructor(){
        this.hostTypes = new hosts();
        this.projectTypes = new projectTypes();
    }
}