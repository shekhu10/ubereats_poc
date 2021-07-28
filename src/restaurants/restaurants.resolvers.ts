import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { createRestaurantDTO } from "./dtos/create_restaurant.dto";
import { UpdateRestaurantDTO } from "./dtos/update_restaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";
import { RestaurantService } from "./restaurants.service";


@Resolver(() => Restaurant) // this function inside declarator in optional
export class RestaurantResolver {

    constructor(private readonly restaurantService: RestaurantService){}

    @Query( () => [Restaurant] ) // query returns an array of restaurant.. this is graphql way
    async restaurants(): Promise<Restaurant[]>  {
        return this.restaurantService.getAll();
    }

    @Mutation(() => Boolean)
    async createRestaurant(
        // @Args('name') name: string,
        // @Args('address') address: string,
        // @Args('ownerName') ownerName: string,
        // @Args('isVegan') isVegan: boolean
        @Args('input') createRestaurantInputs: createRestaurantDTO, 
    ): Promise<boolean> {
        try{
            await this.restaurantService.createRestaurant(createRestaurantInputs);
            console.log("we are here");
            return true;
        }
        catch(e){
            console.log(e);
            return false;
        }
    }


    @Mutation(() => Boolean)
    async updateRestaurant( @Args('input') UpdateRestaurantDTOinput: UpdateRestaurantDTO ): Promise<Boolean> {
        try{
            await this.restaurantService.updateRestaurant(UpdateRestaurantDTOinput);
            return true;
        }
        catch(e){
            return false;
        }
    }
}