import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

type Image = {
    url: string
}

@Schema({
    timestamps: true
})
export class Accessory{

    @Prop()
    name:string;

    @Prop()
    price: number;

    @Prop()
    desc: string;

    @Prop()
    images: Image[]
}

export const AccessorySchema = SchemaFactory.createForClass(Accessory);
