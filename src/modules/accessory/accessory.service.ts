import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { DataResponse } from 'src/common/DataResponse';
import { Accessory } from 'src/schemas/accessory.schema';

@Injectable()
export class AccessoryService {
  constructor(
    @InjectModel(Accessory.name)
    private readonly accessoryModel: mongoose.Model<Accessory>
  ){}

  async findAll(): Promise<Accessory[]>{
    const accessories = await this.accessoryModel.find();
    return accessories;
  }

  async create(accessory: Accessory): Promise<Accessory> {
    const res = await this.accessoryModel.create(accessory);
    return res;
  }

  async destroy(id: string) {
    const res = await this.accessoryModel.deleteOne({_id: id});

    return res;
  }
}
