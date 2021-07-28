import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createRestaurantDTO } from "./dtos/create_restaurant.dto";
import { UpdateRestaurantDTO } from "./dtos/update_restaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";


@Injectable()
export class RestaurantService {

    constructor(@InjectRepository(Restaurant) 
                private readonly restaurants: Repository<Restaurant>) {}

    getAll(): Promise<Restaurant[]>  {
        // here we need to access database
        return this.restaurants.find();
    }
    createRestaurant(createRestaurantDTO: createRestaurantDTO): Promise<Restaurant> {
        const newRestaurant = this.restaurants.create(createRestaurantDTO);
        return this.restaurants.save(newRestaurant);
    }

    updateRestaurant({id, data}: UpdateRestaurantDTO){
        return this.restaurants.update(id, {...data});
    }


}
