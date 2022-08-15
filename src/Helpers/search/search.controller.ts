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
  getIP(@Req() request: Request) {
    return this.searchService.getIP(request);
  }

  set IP(@Req() request: Request) {
    this.searchService.IP = request;
  }

  public get IP(): any {
    return this.searchService.IP;
  }
}
