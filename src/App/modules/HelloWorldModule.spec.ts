import { Test, TestingModule } from '@nestjs/testing';
import { HelloWorldController } from './HelloWorldController';
import { HelloWorldService } from '../services';
import { HelloWorldBusiness } from './HelloWorldBusiness';

describe('HelloWorldController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
        controllers: [HelloWorldController],
        providers: [HelloWorldBusiness, HelloWorldService],
    }).compile();
  });

  describe('get HelloWorld Module', () => {
    it('should return "Hello World!"', () => {
      const helloWorldController = app.get<HelloWorldController>(HelloWorldController);
      expect(helloWorldController.getHello('en')).toBe('Hello World!');
    });
  });
});
