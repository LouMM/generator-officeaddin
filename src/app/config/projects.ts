import { serializable, iSerializer } from "../serializer/serializable";


export class templateType {
    name?: string;
    repository?: string;
    branchName?: string;   
}

export class projectType {
    name?: string;
    displayName?: string;
    templates?: templateType[];    
}

@serializable<iSerializer<projectTypes>>()
export class projectTypes extends Array<projectType> {
    private _hydrate(data?: Partial<projectTypes>) {
        Object.assign(this, data);
    }
    serialize(): string {
        return JSON.stringify(this);
    }
    static deserialize(jsonString: string): projectTypes {
        const jsonObject = JSON.parse(jsonString);
        const data = projectTypes.createInstance();
        Object.assign(data, jsonObject);
        return data;
    }
    static createInstance(): projectTypes {
        return new projectTypes();
    }
}
