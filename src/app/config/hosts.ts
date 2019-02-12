import { serializable, iSerializer } from "../serializer/serializable";

export class host {
    name?:string;
    displayName?:string;
    repository?:string;
    
}

@serializable<iSerializer<hosts>>()
export class hosts extends Array<host>{
    serialize(): string {
        return JSON.stringify(this);
    }
    static deserialize(jsonString: string): hosts {
        const jsonObject = JSON.parse(jsonString);
        const data = hosts.createInstance();
        Object.assign(data, jsonObject);
        return data;
    }
    static createInstance(): hosts {
        return new hosts();
    }
    
}