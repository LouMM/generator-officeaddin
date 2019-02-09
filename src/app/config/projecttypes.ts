
import {Decoder, object, string, optional, number, boolean, array} from '@mojotech/json-type-validation';

export class templateType {
    name?:string;
    repository?: string;
    branchName?: string;
}

export type templateTypes = templateType[];

export class projectType {
    name?: string;
    displayName?: string;
    templates?: templateType[];
}

export class projectTypes extends Array<projectType> {

}

