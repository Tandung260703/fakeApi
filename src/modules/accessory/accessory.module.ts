import { Module } from '@nestjs/common';
import { AccessoryController } from './accessory.controller';
import { AccessoryService } from './accessory.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessorySchema } from 'src/schemas/accessory.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:"Accessory", schema: AccessorySchema}])],
  controllers: [AccessoryController],
  providers: [AccessoryService],
})
export class AccessoryModule {}
