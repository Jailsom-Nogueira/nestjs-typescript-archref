import { Module } from '@nestjs/common';
import { HelloWorldBusiness } from './modules/HelloWorldBusiness';
// import { HelloWorldModule } from './modules';
import { HelloWorldController } from './modules/HelloWorldController';
import { HelloWorldModule } from './modules';
import { HelloWorldServiceModule } from './services';

@Module({
  imports: [HelloWorldModule, HelloWorldServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
