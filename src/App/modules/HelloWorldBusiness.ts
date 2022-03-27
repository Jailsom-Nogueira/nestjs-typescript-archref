// Libs
import { Injectable } from "@nestjs/common";
// Self
import { HelloWorldService } from "../services";
import { CheckLanguageFormat } from "../utils";

@Injectable()
export class HelloWorldBusiness {
    constructor(
        private helloWorldService: HelloWorldService,
    ) {}

    getHelloBusiness(language: string): string {
        return this.helloWorldService.getHelloService(
            CheckLanguageFormat(language)
            )
      }
}