import { IsString, IsNotEmpty } from 'class-validator';

export class storeDataDTO {
  @IsString()
  @IsNotEmpty()
  data: string;
}
