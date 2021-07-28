import { ArgsType, Field, InputType, PartialType } from "@nestjs/graphql";
import { Restaurant } from "../entities/restaurant.entity";
import { createRestaurantDTO } from "./create_restaurant.dto";




@InputType()
export class UpdateRestaurantInputType extends PartialType(createRestaurantDTO){}


@InputType()
export class UpdateRestaurantDTO {
    @Field(() => Number)
    id: number;

    @Field(() => UpdateRestaurantInputType)
    data: UpdateRestaurantInputType;
}