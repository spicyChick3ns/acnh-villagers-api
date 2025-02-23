import { registerEnumType } from "type-graphql";

export enum Species {
  Alligator = "Alligator",
  Anteator = "Anteator",
  Bear = "Bear",
  Bird = "Bird",
  Bull = "Bull",
  Cat = "Cat",
  Chicken = "Chicken",
  Cow = "Cow",
  Cub = "Cub",
  Deer = "Deer",
  Dog = "Dog",
  Duck = "Duck",
  Eagle = "Eagle",
  Elephant = "Elephant",
  Frog = "Frog",
  Goat = "Goat",
  Gorilla = "Gorilla",
  Hamster = "Hamster",
  Hippo="Hippo",
  Horse="Horse",
  Kangaroo="Kangaroo",
  Koala="Koala",
  Lion="Lion",
  Monkey="Monkey",
  Mouse="Mouse",
  Octopus="Octopus",
  Ostrich="Ostrich",
  Penguin="Penguin",
  Pig="Pig",
  Rabbit="Rabbit",
  Rhino="Rhino",
  Sheep="Sheep",
  Squirrel="Squirrel",
  Tiger="Tiger",
  Wolf="Wolf"
}

registerEnumType(Species, {
  name: "Species",
  description: "The basic species",
});


