const add = (a: number, b: number): number => {
    return a + b;
}

function concatStrings(strings: Array<string>): string {

    let result: string = '';

    for (let element of strings) {
        result += element + ' ';
    }

    return result.trim();
}

const result: string = concatStrings(['1, 2, 3, 4, 5, 6']);
console.log(`Concatenated string: ${result}`);


interface MyPosition {
    x: number | undefined,
    y: number | undefined,
    toString: () => string
};

interface MyPositionWithDefault extends MyPosition {
    default: string;
}


const position = (a?: number, b?: number) => {

    if (!a && !b) {

        const myPosition: MyPosition = {
            x: undefined,
            y: undefined,
            toString(): string {
                return `X and Y undefined`;
            }
        };

        return myPosition.toString();
    }

    if (a && !b) {

        const defaultPosition: MyPositionWithDefault = {
            x: a,
            y: undefined,
            default: a.toString()
        };

        return defaultPosition.default;
    }

    const position: MyPosition = {
        x: a,
        y: b,
        toString(): string {
            return `X: ${this.x}, Y: ${this.y}`;
        }
    };

    return position.toString();
}


console.log(`Empty: ${position()}`);
console.log(`A defined: ${position(4)}`);
console.log(`A and B are defined: ${position(4, 5)}`);

