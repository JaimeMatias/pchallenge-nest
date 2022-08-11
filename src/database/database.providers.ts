import * as mongoose from 'mongoose';
require('dotenv').config();
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.PORT),
  },
];
