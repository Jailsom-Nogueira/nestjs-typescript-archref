import { Module } from '@nestjs/common';
// import { HttpModule } from '@nestjs/axios';
// import { ConfigService } from '@nestjs/config';
import { HelloWorldService } from './HelloWorldService';

@Module({
  imports: [],
  controllers: [],
  providers: [HelloWorldService],
})
export class HelloWorldServiceModule {}
