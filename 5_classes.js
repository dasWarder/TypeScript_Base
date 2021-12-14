var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function () {
        return "Current version: ".concat(this.version.toFixed(1));
    };
    return Typescript;
}());
;
var v1 = new Typescript(1.0);
console.log(v1.info());
var Car = /** @class */ (function () {
    function Car(name, model, carClass) {
        this.carClass = 'C';
        this.name = name,
            this.model = model;
        if (carClass) {
            this.carClass = carClass;
        }
    }
    ;
    Car.prototype.toString = function () {
        return "Name: ".concat(this.name, ", model: ").concat(this.model, ", carClass: ").concat(this.carClass);
    };
    return Car;
}());
var audi = new Car('Audi', 'A6');
var mercedes = new Car('Mercedes', '6', 'A');
console.log(audi.toString());
console.log(mercedes.toString());
var CarShorter = /** @class */ (function () {
    function CarShorter(name, model, carClass) {
        this.name = name;
        this.model = model;
        this.carClass = 'C';
        if (carClass) {
            this.carClass = carClass;
        }
    }
    ;
    CarShorter.prototype.toString = function () {
        return "Short Name: ".concat(this.name, ", model: ").concat(this.model, ", carClass: ").concat(this.carClass);
    };
    return CarShorter;
}());
;
var audiShort = new CarShorter('Audi', 'A6');
var mercedesShort = new CarShorter('Mercedes', '6', 'A');
console.log(audiShort.toString());
console.log(mercedesShort.toString());
var AnimalType;
(function (AnimalType) {
    AnimalType["MAMMAL"] = "mammal";
    AnimalType["BIRD"] = "bird";
    AnimalType["FISH"] = "fish";
    AnimalType["REPTILES"] = "reptiles";
    AnimalType["AMPHIBIAN"] = "amphibians";
    AnimalType["ARTHROPOD"] = "arthropod";
})(AnimalType || (AnimalType = {}));
;
var Animal = /** @class */ (function () {
    function Animal(animalClass, name, id) {
        this.id = 0;
        this.animalClass = animalClass;
        this.name = name;
        id ? this.id = id : this.id++;
    }
    Animal.prototype.basicInfo = function () {
        return "Id: ".concat(this.id, ", animalClass: ").concat(this.animalClass, ", name: ").concat(this.name);
    };
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    Animal.prototype.setAnimalClass = function (animalClass) {
        this.animalClass = animalClass;
    };
    return Animal;
}());
;
var Mammals = /** @class */ (function (_super) {
    __extends(Mammals, _super);
    function Mammals(name, color, id) {
        var _this = _super.call(this, AnimalType.MAMMAL, name, id) || this;
        _this.setName = function (name) {
            _super.prototype.setName.call(_this, name);
        };
        _this.setColor = function (color) {
            _this.color = color;
        };
        _this.color = color;
        return _this;
    }
    Mammals.prototype.toString = function () {
        return _super.prototype.basicInfo.call(this) + ", color: ".concat(this.color);
    };
    return Mammals;
}(Animal));
var Birds = /** @class */ (function (_super) {
    __extends(Birds, _super);
    function Birds(name, isFlying, id) {
        var _this = _super.call(this, AnimalType.BIRD, name, id) || this;
        _this.fly = function () {
            console.log('I am flying away');
        };
        _this.setIsFlying = function (isFlying) {
            _this.isFlying = isFlying;
        };
        _this.isFlying = isFlying;
        return _this;
    }
    Birds.prototype.toString = function () {
        return _super.prototype.basicInfo.call(this) + ", flying: ".concat(this.isFlying ? 'yes' : 'no');
    };
    Birds.prototype.setName = function (name) {
        _super.prototype.setName.call(this, name);
    };
    return Birds;
}(Animal));
;
var cow = new Mammals('cow', 'white');
var parrot = new Birds('parrot', true, 13);
console.log(cow.toString());
console.log(parrot.toString());
parrot.fly();
var dog = cow;
dog.setName('Dog');
dog.setColor('Black');
console.log(dog.toString());
