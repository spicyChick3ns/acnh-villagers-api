import {
    Resolver,
    Mutation,
    Arg,
    Query,
    InputType,
    Field
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

@Resolver()
export class VillagerResolver {
    @Mutation(() => Villager)
    async createVillager(
        @Arg("options", () => VillagerInput) options: VillagerInput,
    ) {
        const villager = await Villager.create(options).save();
        return villager;
    }

    @Query(() => [Villager])
    villagers() {
        return Villager.find()
    }
}
