interface Person {
    name: string,
    age: number;
};

type PersonKeys = keyof Person;

let key: PersonKeys = 'name';
key = 'age';


type User = {
    _id: number;
    name: string;
    email: string;
    createdAt: Date;
};

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>;
type UserKeysNoMetaData = Pick<User, 'name' | 'email'>;

let u1: UserKeysNoMeta = 'name';
