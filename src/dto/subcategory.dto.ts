import { IsString, IsNumber, IsArray } from 'class-validator';
import { Document } from 'mongoose';
import { Image } from './image.dto';
import { Description } from './description.dto';

export class Subcategory extends Document {
  @IsString()
  name: string;

  @IsArray()
  images: Array<Partial<Image>>;

  @IsArray()
  description: Array<Description>;

  @IsArray()
  deleteImages: string[];
  @IsString()
  category: string;

  @IsNumber()
  weight: number;

  @IsNumber()
  value: number;

  @IsNumber()
  price: number;

  @IsNumber()
  priceGalore: number;

  @IsString()
  currency: string;
}
