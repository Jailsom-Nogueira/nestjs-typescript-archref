import { Controller, Get, Headers } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
// Self
import { HelloWorldBusiness } from './HelloWorldBusiness'

@ApiTags('get/hello-world')
@Controller('get')
export class HelloWorldController {
  constructor(
    private helloWorldBusiness: HelloWorldBusiness
    ) {}

  @Get('hello-world')
  @ApiHeader({ name: 'language', required: false})
  getHello(
    @Headers('language') language: string,
  ): string {

    return this.helloWorldBusiness.getHelloBusiness(language);
  }
}
