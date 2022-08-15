import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type CitysDocument = citydb & Document;

@Schema()
export class citydb {
  @Prop()
  IpSolicitud: String;

  @Prop()
  City: String;

  @Prop()
  Latitud: Number;

  @Prop()
  Longitud: Number;
}

export const CitySchema = SchemaFactory.createForClass(citydb);
