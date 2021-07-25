import { ArgsType, Field, InputType } from "@nestjs/graphql";
import {IsBoolean, IsString, Length } from "class-validator";


// InputType()  -> this is used to give input
// @ArgsType()    // this is used to input data in graphql in the natural form (no modificaion), this allows to pass separate values to graphql
// if we use inputtype we have to pass object
// so this below class becomes a object if we use inputType, if we use argsType it is treated as different values while quering
@ArgsType()
export class createRestaurantDTO {

    @Field(() => String)
    @IsString()
    @Length(5, 10)
    name: string;
    
    @Field(() => Boolean)
    @IsBoolean()
    isVegan?: true;

    @Field(() => String)
    @IsString()
    address: string;

    @Field(() => String)
    @IsString()
    ownerName: string;
}