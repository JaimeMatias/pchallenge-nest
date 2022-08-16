import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  All,
  HttpCode,
  Req,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Request, Response } from 'express';

@Controller('v1/location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  getLocation(@Req() request: Request) {
    return this.locationService.getLocation(request).then((data) => {
      return data;
    });
  }

  // @Get()
  // async getLocation() {
  //   console.log('Muestra toda la informacion de la base de Datos');
  //   return await this.locationService.findAll();
  // }
  // @Post()
  // async createLocation(@Req() request: Request) {
  //   await this.locationService.create(request);
  // }
  /**
   *The handler for all the wrong Api Request
   * @returns
   */
  @All()
  @HttpCode(400)
  all() {
    return this.locationService.notValidEndpoint();
  }
}
