import { IsString, IsNotEmpty } from 'class-validator';

export class receptorDataDTO {
  @IsString()
  @IsNotEmpty()
  data: string;
}
