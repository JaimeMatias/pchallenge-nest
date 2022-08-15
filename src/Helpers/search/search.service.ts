import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';
require('dotenv').config();
const ipware = require('ipware')().get_ip;

@Injectable()
export class SearchService {
  ip: string;
  constructor() {
    this.ip = process.env.IP_Salida;
  }
  /**
   * It returns the IP from where the request is made
   * If the IP is internal, we continue with the default
   * If the IP is external, update the value in the class
   * @function GetIP
   * @param  Req - The Request to the Server
   */
  getIP(Req: Request) {
    const ipInfo = ipware(Req);
    const { clientIp } = ipInfo;
    if (clientIp != '::1' && clientIp != '::ffff:127.0.0.1') {
      return clientIp;
    }
    return process.env.IP_Salida;
  }
  get IP(): any {
    return this.ip;
  }
  set IP(Req: Request) {
    const ipInfo = ipware(Req);
    const { clientIp } = ipInfo;
    if (clientIp != '::1' && clientIp != '::ffff:127.0.0.1') {
      this.ip = clientIp;
    }
    this.ip = process.env.IP_Salida;
  }
}
