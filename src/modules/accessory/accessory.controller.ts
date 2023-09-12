import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { AccessoryService } from './accessory.service';
import { DataResponse } from 'src/common/DataResponse';
import { Accessory } from 'src/schemas/accessory.schema';

@Controller("/accessories")
export class AccessoryController {
  constructor(private readonly accessoryService: AccessoryService) {}

  @Get()
  async getAllAccessories() {
    const result = await this.accessoryService.findAll();
    return new DataResponse(HttpStatus.OK, result);
  }

  @Post()
   async createAccessory(@Body() accessory: Accessory) {
    const result = await this.accessoryService.create(accessory);

    return new DataResponse(HttpStatus.OK, result);
  }

  @Delete(":id")
  async deleteAccessory(@Param("id") id: string) {
    const result = await this.accessoryService.destroy(id);
    return new DataResponse(HttpStatus.OK, result);
  }
}
