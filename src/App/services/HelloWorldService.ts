import { Injectable } from '@nestjs/common';
import { GetTextByLanguage } from '../utils';
import CustomHttpException from '../utils/ErrHandlers/CustomHttpException';

@Injectable()
export class HelloWorldService {
  getHelloService(language: string): string {
    try{
      return GetTextByLanguage[language]();
    }catch (e){
      throw new CustomHttpException(e)
    }
  }
}
