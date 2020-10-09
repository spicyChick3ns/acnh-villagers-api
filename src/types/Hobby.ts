import { registerEnumType } from "type-graphql";

export enum Hobby { 
   Education = "Education",
   Fashion = "Fashion",
   Fitness = "Fitness",
   Music = "Music",
   Nature = "Nature",
   Play = "Play"
}

registerEnumType(Hobby, {
  name: "Hobby", 
  description: "The basic hobbies",
});


