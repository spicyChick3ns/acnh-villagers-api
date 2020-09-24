import { registerEnumType } from "type-graphql";

export enum Personality { 
    // "Big Sister",
    Cranky,
    Jock,
    Lazy,
    Normal,
    Peppy,
    Snooty
}

registerEnumType(Personality, {
  name: "Personality", 
  description: "The basic personalities",
});


