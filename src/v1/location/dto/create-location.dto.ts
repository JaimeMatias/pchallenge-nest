import { IsNotEmpty } from 'class-validator';
export class CreateLocationDto {
  @IsNotEmpty()
  IpSolicitud: string;
  @IsNotEmpty()
  City: string;
  @IsNotEmpty()
  Latitud: Number;
  @IsNotEmpty()
  Longitud: Number;
}
