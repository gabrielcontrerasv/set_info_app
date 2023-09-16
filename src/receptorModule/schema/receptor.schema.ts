import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReceptorDocument = Receptor & Document;

@Schema()
export class Receptor {
  @Prop()
  data: string;
}

export const ReceptorSchema = SchemaFactory.createForClass(Receptor);
