export class Role {
    id: number;
    name: string;
    icon?: string;
}

export class Hero {
    _id?: string;
    id: number;
    roleid: number;
    name: string;
    img?: string;
    desc?: string;
    ability?: Object;
}
