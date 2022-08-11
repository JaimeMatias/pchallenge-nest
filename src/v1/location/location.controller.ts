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
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('v1/location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  getLocation() {
    return this.locationService.getLocation();
  }

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
