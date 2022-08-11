import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  All,
} from '@nestjs/common';
import { V1Service } from './v1.service';
import { CreateV1Dto } from './dto/create-v1.dto';
import { UpdateV1Dto } from './dto/update-v1.dto';

@Controller('v1')
export class V1Controller {
  constructor(private readonly v1Service: V1Service) {}

  @Get()
  @HttpCode(200)
  basicResponse() {
    return this.v1Service.basicResponse();
  }

  /**
   *The handler for all the wrong Api Request
   * @returns
   */
  @All()
  @HttpCode(400)
  all() {
    return this.v1Service.notValidEndpoint();
  }
}
