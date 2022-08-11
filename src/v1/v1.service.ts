import { Injectable } from '@nestjs/common';
import { CreateV1Dto } from './dto/create-v1.dto';
import { UpdateV1Dto } from './dto/update-v1.dto';

@Injectable()
export class V1Service {
  /**
   * Generate a message when the End Point is the Route Base
   * @returns The basic answer
   */
  basicResponse() {
    return { msg: 'Basic EndPoint' };
  }

  /**
   * Generate an Error Message when the API request is not a valid one
   * @returns The basic error message
   */
  notValidEndpoint() {
    return `The endpoint you want to access is not a valid one`;
  }
}
