import { Injectable, Inject } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Request } from 'express';
import { SearchController } from 'src/Helpers/search/search.controller';
import { SearchService } from 'src/Helpers/search/search.service';
// import { Citys } from './interfaces/location.interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { citydb, CitysDocument } from './schemas/location.schema';
import { Model } from 'mongoose';
const ipware = require('ipware')().get_ip;

@Injectable()
export class LocationService {
  search: SearchController;
  constructor(
    @InjectModel(citydb.name) private itemsModule: Model<CitysDocument>, // @Inject('CITY_MODEL') // private cityModel: Model<Citys>,
  ) {
    this.search = new SearchController(new SearchService());
  }
  async create(createLocationDto: CreateLocationDto) {
    console.log(createLocationDto);
    // this.itemsModule.create(createLocationDto);
    return 'This action adds a new location';
  }

  async findAll() {
    return this.itemsModule.find();
  }
  /**
   * Generate a message when the End Point is the Location,  Returns the location data of the city according to ip-api
   * @async
   * @function getLocation
   */
  getLocation(Req: Request) {
    this.search.IP = Req;
    this.search.IP;
    return { IP: this.search.IP, msg: 'Your data' };
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
