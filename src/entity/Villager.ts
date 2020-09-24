import {Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Species } from '../types/Species';
import { Personality } from '../types/Personality';
import { Gender } from '../types/Gender';
import { Hobby } from '../types/Hobby';

@ObjectType()
@Entity()
export class Villager extends BaseEntity{ 
 @Field()
 @PrimaryGeneratedColumn()
 id: number
 
 @Field()
 @Column()
 name: string

 @Field()
 @Column()
 catchphrase: string

 @Field()
 @Column()
 birthday: Date

 @Field(() => Species )
 @Column()
 species: Species

 
 @Field(() => Gender)
 @Column()
 gender: Gender

 @Field(() => Personality)
 @Column()
 personality: Personality
 
 @Field(() => Hobby)
 @Column()
 hobby: Hobby
} 
