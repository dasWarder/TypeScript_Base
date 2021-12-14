interface Rect {
    readonly id: string;
    color?: string;
    size: {
        width: number;
        height: number;
    }
};


const rect1: Rect = {
    id: 'a32-4g5er',
    color: 'blue',
    size: {
        width: 20,
        height: 30
    }
};

const rect2 = {} as Rect;
const rect3 = <Rect>{}

interface RectWithArea extends Rect {
    getArea: () => number
};

const reactWithArea: RectWithArea = {
    id: 'adf35',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
};


interface IClock {
    time: Date,

    setTime(date: Date): void
};

class Clock implements IClock {
    time: Date = new Date();

    setTime(date: Date): void {
        this.time = date;
    }

    printTime(): void {
        console.log('Current time: ' + this.time);
    }
};

const clock = new Clock();
clock.printTime();
clock.setTime(new Date(2021, 11, 11, 12, 0, 0, 0));
clock.printTime();


interface INavStyle {
    [key: string]: string
};

const navStyle: INavStyle = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};





