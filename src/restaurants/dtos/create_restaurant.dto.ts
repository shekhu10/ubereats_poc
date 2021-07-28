import { ArgsType, Field, InputType, OmitType } from "@nestjs/graphql";
import {IsBoolean, IsString, Length } from "class-validator";
import { Restaurant } from "../entities/restaurant.entity";


// InputType()  -> this is used to give input
// @ArgsType()    // this is used to input data in graphql in the natural form (no modificaion), this allows to pass separate values to graphql
// if we use inputtype we have to pass object
// so this below class becomes a object if we use inputType, if we use argsType it is treated as different values while quering
// @InputType()
// export class createRestaurantDTO extends OmitType(Restaurant, ["id"], InputType) {
//     // we are passing InputType as our parent and child class are different
//     // or make entity as abstract input type, we are doing that way
// }
@InputType()
export class createRestaurantDTO extends OmitType(Restaurant, ["id"]){}
