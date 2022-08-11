import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
  create(createLocationDto: CreateLocationDto) {
    return 'This action adds a new location';
  }

  findAll() {
    return `This action returns all location`;
  }
  /**
   * Generate a message when the End Point is the Location,  Returns the location data of the city according to ip-api
   * @async
   * @function getLocation
   */
  getLocation() {
    return { msg: 'Your data' };
  }
  /**
   * Generate an Error Message when the API request is not a valid one
   * @function notValidEndpoint
   * @returns The basic error message
   */
  notValidEndpoint() {
    return `The endpoint you want to access is not a valid one`;
  }
}
