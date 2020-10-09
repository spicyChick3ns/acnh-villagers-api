import { registerEnumType } from "type-graphql";

export enum Personality {
  BigSister = "Big Sister",
  Cranky = "Cranky",
  Jock = "Jock",
  Lazy = "Lazy",
  Normal = "Normal",
  Peppy = "Peppy",
  Snooty = "Snooty"
}

registerEnumType(Personality, {
  name: "Personality",
  description: "The basic personalities",
});


