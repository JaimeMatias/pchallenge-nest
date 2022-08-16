import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';
const axios = require('axios').default;
require('dotenv').config();
const ipware = require('ipware')().get_ip;

@Injectable()
export class SearchService {
  ip: string;
  constructor() {
    this.ip = process.env.IP_Salida;
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

  async getCity(IP: String) {
    return new Promise((resolve: (value: any) => void, reject) => {
      let response = {};
      try {
        response = axios.get(`https://ipapi.co/${process.env.IP_Salida}/json/`);
      } catch (error) {
        reject(new Error('Request failure in IPAPI Bad Query'));
      }
      resolve(response);
    });
  }

  VerifiedStatusCity(response: {
    status: 200;
    data: { ip: {}; city: {}; latitude: {}; longitude: {} };
  }) {
    return new Promise((resolve, reject) => {
      const { status } = response; //Extract the status to verify if it is correct or not
      if (status != 200) {
        reject(
          new Error('Failure in the request in IPAPI Without Information'),
        );
      }
      //Since it has already been verified that it is correct, the data can be extracted and returned
      const { data } = response;
      //Rename the fields to match the names of my DB
      const {
        ip: IpSolicitud,
        city: City,
        latitude: Latitud,
        longitude: Longitud,
      } = data;
      const dataResponse = { IpSolicitud, City, Latitud, Longitud };
      resolve(dataResponse);
    });
  }

  GetLocation(IP: String) {
    return this.getCity(IP)
      .then((response) => this.VerifiedStatusCity(response))
      .then((data) => data)
      .catch((error) => {
        console.log(`El error es: ${error}`);
      });
  }
}
