import { registerEnumType } from "type-graphql";

export enum Hobby { 
   Education,
   Fashion,
   Fitness,
   Music,
   Nature,
   Play
}

registerEnumType(Hobby, {
  name: "Hobby", 
  description: "The basic hobbies",
});


