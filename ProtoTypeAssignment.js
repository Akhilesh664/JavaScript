//assignment #prototype
//=====================

// Create the Animal function which returns objects with properties
function Animal(name, color, breed, gender, age) {
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.gender = gender;
    this.age = age;
}


// Create another object with two different methods
const AnimalMethods = {
    getNameColorGender: function(){
        return `Name: ${this.name}, Color: ${this.color}, Gender: ${this.gender}`;
    },
    getNameBreedAge: function () {
        return `Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age}`;
    }
};


// Add methods to Animal's prototype using prototype chaining
Animal.prototype.getNameColorGender = function () {
    return AnimalMethods.getNameColorGender.call(this);
};

Animal.prototype.getNameBreedAge = function () {
    return AnimalMethods.getNameBreedAge.call(this);
};

// Create objects using the Animal constructor
const dog = new Animal("Buddy", "Brown", "Golden Retriever", "Male", 5);
const cat = new Animal("Whiskers", "White", "Persian", "Female", 3);

// Use methods on the objects
console.log(dog.getNameColorGender()); // Output: Name: Buddy, Color: Brown, Gender: Male
console.log(dog.getNameBreedAge());    // Output: Name: Buddy, Breed: Golden Retriever, Age: 5

console.log(cat.getNameColorGender()); // Output: Name: Whiskers, Color: White, Gender: Female
console.log(cat.getNameBreedAge());    // Output: Name: Whiskers, Breed: Persian, Age: 3
