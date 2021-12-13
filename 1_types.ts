const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 52;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello, world!';

const numberArray: number[] = [1, 2, 3, 4];
const numberArrayGeneric: Array<number> = [1, 1, 2, 2, 3, 3, 4, 4];
const stringArray: Array<string> = ['Hello', 'world', '!'];

const contact: [string, number] = ['Alex', 42];

let value: any = 42;
value = 'fifty two';

function sayMyName(name: string): void {
    console.log(`Hello, ${name}`);
};

sayMyName('Alex');


function throwError(message: string): never {
    throw new Error(message);
}

function infinite() : never {
    let count = 0;
    while (true) {
        console.log(count++);
    }
}

type Login = string
const login: Login = 'admin';

type ID = string | number;
const idNum: ID = 123;
const inStr: ID = 'fsd3r5f';


type Unknown = null | undefined
const nullable: Unknown = null;



