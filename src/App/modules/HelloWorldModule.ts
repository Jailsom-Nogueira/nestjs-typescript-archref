import { Module } from '@nestjs/common';
// import { HttpModule } from '@nestjs/axios';
// import { ConfigService } from '@nestjs/config';
import { HelloWorldService } from '../services';
import { HelloWorldBusiness } from './HelloWorldBusiness';
import { HelloWorldController } from './HelloWorldController';

@Module({
  imports: [],
  controllers: [HelloWorldController],
  providers: [HelloWorldBusiness, HelloWorldService],
})
export class HelloWorldModule {}
