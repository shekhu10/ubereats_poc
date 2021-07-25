import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Restaurant {

    @Field(() => String)
    name: string;
    @Field(() => Boolean, {nullable:true})
    isVegan?: true;
    @Field(() => String)
    address: string;
    @Field(() => String)
    ownerName: string;
}