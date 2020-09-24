import { registerEnumType } from "type-graphql";

export enum Species { 
    Alligator,
    Anteator,
    Bear,
    Bird,
    Bull,
    Cat,
    Chicken,
    Cow,
    Cub,
    Deer,
    Dog,
    Duck,
    Eagle,
    Elephant,
    Frog,
    Goat,
    Gorilla,
    Hamster,
    Hippo,
    Horse,
    Kangaroo,
    Koala,
    Lion,
    Monkey,
    Mouse,
    Octopus,
    Ostrich,
    Penguin,
    Pig,
    Rabbit,
    Rhino,
    Sheep,
    Squirrel,
    Tiger,
    Wolf
}

registerEnumType(Species, {
  name: "Species", 
  description: "The basic species",
});


