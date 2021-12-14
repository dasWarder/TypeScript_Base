
type AlertType = 'success' | 'warn' | 'danger' | 'info';

const numArray: Array<number> = [1, 1, 2, 3, 5, 8];
const alertArray: Array<AlertType> = ['success', 'warn', 'danger', 'info'];

const reverse = <T>(array: T[]): T[] => {
    return array.reverse();
}

const first: Array<string> = ['h', 'e', 'l','l', 'o'];
const second: Array<number> = [1, 2, 3, 4, 5];
const third: Array<AlertType> = ['success', 'warn', 'danger'];

const firstReversed: Array<string> = reverse(first);
const secondReversed: Array<number> = reverse(second);
const thirdReversed: Array<AlertType> = reverse(third);

console.log(`after: ${firstReversed}`);
console.log(`after: ${secondReversed}`);
console.log(`after: ${thirdReversed}`);
