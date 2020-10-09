import { registerEnumType } from "type-graphql";

export enum Gender { 
    Male = "Male",
    Female = "Female"
}

registerEnumType(Gender, {
  name: "Gender", 
  description: "The available genders",
});


