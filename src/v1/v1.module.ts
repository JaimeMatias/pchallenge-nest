import { Module } from '@nestjs/common';
import { V1Service } from './v1.service';
import { V1Controller } from './v1.controller';
import { LocationModule } from './location/location.module';

@Module({
  controllers: [V1Controller],
  providers: [V1Service],
  imports: [LocationModule]
})
export class V1Module {}
