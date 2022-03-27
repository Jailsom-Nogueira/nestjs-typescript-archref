import { ApiProperty } from "@nestjs/swagger";

export class IGetTextByLanguage {
    @ApiProperty({ required: false})
    en: () => string; 
    es: () => string; 
    pt: () => string; 
}