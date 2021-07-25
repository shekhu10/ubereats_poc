import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { createRestaurantDTO } from "./dtos/create_restaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";


@Resolver(() => Restaurant) // this function inside declarator in optional
export class RestaurantResolver {
    @Query( () => [Restaurant] ) // query returns an array of restaurant.. this is graphql way
    restaurants(@Args('veganOnly') veganOnly: String): Restaurant[] {   // this is typescript way
        console.log(veganOnly);
        return [];
    }

    @Mutation(() => Boolean)
    createRestaurant(
        // @Args('name') name: string,
        // @Args('address') address: string,
        // @Args('ownerName') ownerName: string,
        // @Args('isVegan') isVegan: boolean
        @Args() createRestaurantInputs: createRestaurantDTO, 
    ): boolean {
        console.log(createRestaurantInputs);
        return true;
    }
}