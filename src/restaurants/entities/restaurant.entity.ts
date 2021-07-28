import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsBoolean, IsOptional, IsString, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@InputType({isAbstract: true})
@ObjectType()
@Entity()
export class Restaurant {

    @PrimaryGeneratedColumn()
    @Field(() => Number)
    @IsString()
    id: number;

    @Field(() => String)
    @Column()
    @IsString()
    @Length(5, 10)
    name: string;

    @Field(() => Boolean, {defaultValue:true})    // nullable can also be used, nullable makes user not to give input. Both are similar.
    @Column({default: true})
    @IsBoolean()
    @IsOptional()
    isVegan?: true;

    @Field(() => String)  // this check is for graphql
    @Column()           // for database
    @IsString()            // for validation
    address: string;

    @Field(() => String)
    @Column()
    @IsString()
    ownerName: string;

    @Field(() => String)
    @Column()
    @IsString()
    categoryName: string;
}

// object type is something that graphQL takes to build our schema
// entity decorator will make typeorm to save this in our database
// we can merge both these
// i.e @objectType() and @Field() are to generate schema for graphQL and @Entity and @Column are for TypeORM to store in DB