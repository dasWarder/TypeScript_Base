class Typescript {
    private readonly version: number;

    constructor(version: number) {
        this.version = version;
    }

    info(): string {
        return `Current version: ${this.version.toFixed(1)}`;
    }
};


const v1: Typescript = new Typescript(1.0);
console.log(v1.info());


class Car {

    private readonly name: string;
    private readonly model: string;
    private readonly carClass: string = 'C';

    constructor(name: string, model: string, carClass?: string) {
        this.name = name,
        this.model = model;
        if(carClass) {
            this.carClass = carClass;
        }
    };

    toString(): string {
        return `Name: ${this.name}, model: ${this.model}, carClass: ${this.carClass}`;
    }
}

const audi: Car = new Car('Audi','A6');
const mercedes: Car = new Car('Mercedes', '6', 'A');

console.log(audi.toString());
console.log(mercedes.toString());



class CarShorter {
    private readonly carClass: string = 'C';

    constructor(private readonly name: string, private readonly model: string, carClass?: string) {
        if(carClass) {
            this.carClass = carClass;
        }
    };

    toString(): string {
        return `Short Name: ${this.name}, model: ${this.model}, carClass: ${this.carClass}`;
    }
};

const audiShort: CarShorter = new CarShorter('Audi','A6');
const mercedesShort: CarShorter = new CarShorter('Mercedes', '6', 'A');

console.log(audiShort.toString());
console.log(mercedesShort.toString());

enum AnimalType {
    MAMMAL = 'mammal',
    BIRD = 'bird',
    FISH = 'fish',
    REPTILES = 'reptiles',
    AMPHIBIAN = 'amphibians',
    ARTHROPOD = 'arthropod'
};

class Animal {
    private readonly id: number = 0;
    protected animalClass: AnimalType;
    protected name: string;

    constructor(animalClass: AnimalType, name: string, id?: number) {
        this.animalClass = animalClass;
        this.name = name;
        id? this.id = id : this.id++;
    }

    protected basicInfo(): string {
        return `Id: ${this.id}, animalClass: ${this.animalClass}, name: ${this.name}`;
    }

    protected setName(name: string) : void{
        this.name = name;
    }

    protected setAnimalClass(animalClass: AnimalType) : void {
        this.animalClass = animalClass;
    }
};

class Mammals extends Animal {

    private color: string;

    constructor(name: string, color: string, id?: number) {
        super(AnimalType.MAMMAL, name, id);
        this.color = color;
    }

    toString(): string {
        return super.basicInfo() + `, color: ${this.color}`;
    }

    setName = (name: string) : void => {
        super.setName(name);
    }

    setColor = (color: string): void => {
        this.color = color;
    }
}


class Birds extends Animal {

    private isFlying: boolean;

    constructor(name: string, isFlying: boolean, id?: number) {
        super(AnimalType.BIRD, name, id);
        this.isFlying = isFlying;
    }

    toString(): string {
        return super.basicInfo() + `, flying: ${this.isFlying? 'yes' : 'no'}`;
    }

    fly = (): void => {
        console.log('I am flying away');
    }

    setIsFlying = (isFlying: boolean): void => {
        this.isFlying = isFlying;
    }

    setName(name: string) {
        super.setName(name);
    }
};

const cow: Mammals = new Mammals('cow', 'white');
const parrot: Birds = new Birds('parrot', true, 13);

console.log(cow.toString());
console.log(parrot.toString());

parrot.fly();

const dog = cow;
dog.setName('Dog');
dog.setColor('Black');

console.log(dog.toString());