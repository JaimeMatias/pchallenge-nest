import { Injectable, Inject } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Request, Response } from 'express';
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

  async findAll() {
    return this.itemsModule.find();
  }
  /**
   * Generate a message when the End Point is the Location,  Returns the location data of the city according to ip-api
   * @async
   * @function getLocation
   */
  async getLocation(Req: Request) {
    this.search.IP = Req;
    return new Promise((resolve, reject) => {
      this.CityQueryDB(this.search.IP)
        .then((data) => resolve(data))
        .catch((e) => {
          console.log(e);
          resolve(this.CityQueryIpapi(this.search.IP));
        });
    });
  }

  async CityQueryDB(IPconsulta: string) {
    const DBquery = await this.itemsModule.findOne({
      IpSolicitud: IPconsulta,
    });

    return new Promise((resolve, reject) => {
      // The city was found in the DB
      if (DBquery) {
        console.log('city was found in the DB');
        const { IpSolicitud, City, Latitud, Longitud } = DBquery;
        resolve({ IpSolicitud, City, Latitud, Longitud });
      } else {
        console.log('city was not  found in the DB');
        reject({ msg: 404 });
      }
    });
  }

  CityQueryIpapi(IPconsulta: string) {
    console.log('Ingresa a IPAPI');
    return this.search.GetLocation(IPconsulta).then((data) => {
      return data;
    });
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
