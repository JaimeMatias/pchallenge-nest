import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
// import { locationProviders } from './providers/location.providers';
// import { DatabaseModule } from 'src/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchModule } from 'src/Helpers/search/search.module';
import { citydb, CitySchema } from './schemas/location.schema';

@Module({
  imports: [
    SearchModule,
    MongooseModule.forFeature([{ name: citydb.name, schema: CitySchema }]),
  ],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
