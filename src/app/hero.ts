export class Role {
    id: number;
    name: string;
    icon?: string;
}

export class Hero {
    id: number;
    roleid: number;
    name: string;
    img?: string;
}
