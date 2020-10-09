import {
    Resolver,
    Mutation,
    Arg,
    Query,
    InputType,
    Field,
    Int
} from 'type-graphql';
import { Villager } from "../entity/Villager";
import { Species } from '../types/Species';
import { Personality } from '../types/Personality';
import { Gender } from '../types/Gender';
import { Hobby } from '../types/Hobby';

@InputType()
class VillagerInput {
    @Field()
    name: string

    @Field()
    catchphrase: string

    @Field()
    birthday: Date

    @Field(() => Personality)
    personality: Personality

    @Field(() => Species)
    species: Species

    @Field(() => Gender)
    gender: Gender

    @Field(() => Hobby)
    hobby: Hobby
}

@InputType()
class VillagerUpdateInput {
    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    catchphrase?: string

    @Field(() => Date, { nullable: true })
    birthday?: Date

    @Field(() => Personality, { nullable: true })
    personality?: Personality

    @Field(() => Species, { nullable: true })
    species?: Species

    @Field(() => Gender, { nullable: true })
    gender?: Gender

    @Field(() => Hobby, { nullable: true })
    hobby?: Hobby
}

@Resolver()
export class VillagerResolver {
    @Mutation(() => Villager)
    async createVillager(
        @Arg("options", () => VillagerInput) options: VillagerInput,
    ) {
        const villager = await Villager.create(options).save();
        return villager;
    }
    @Mutation(() => Boolean)
    async updateVillager(
        @Arg("id", () => Int) id: number,
        @Arg("input", () => VillagerUpdateInput) input: VillagerUpdateInput
    ) {
        await Villager.update({ id }, input);
        return true;
    }

    @Mutation(() => Boolean)
    async deleteVillager(
        @Arg("id", () => Int) id: number
    ) {
        await Villager.delete({ id });
        return true;
    }
    @Query(() => [Villager])
    villagers() {
        return Villager.find()
    }
    @Query(() => [Villager])
    async villagersByPersonality(
        @Arg("personality", () => Personality) personality: Personality
    ) {
        return Villager.find({ personality })
    }
    @Query(() => [Villager])
    async villagersByHobby(
        @Arg("hobby", () => Hobby) hobby: Hobby
    ) {
        return Villager.find({ hobby })
    }
    @Query(() => [Villager])
    async villagersByGender(
        @Arg("gender", () => Gender) gender: Gender
    ) {
        return Villager.find({ gender })
    }
    @Query(() => [Villager])
    async villagersBySpecies(
        @Arg("species", () => Species) species: Species
    ) {
        return Villager.find({ species })
    }
}
