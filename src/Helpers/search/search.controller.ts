import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { SearchService } from './search.service';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';
import { Request } from 'express';

@Controller()
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  set IP(@Req() request: Request) {
    this.searchService.IP = request;
  }

  get IP(): any {
    return this.searchService.IP;
  }
  async GetLocation(IPCity: string) {
    return await this.searchService.GetLocation(IPCity);
  }
}
