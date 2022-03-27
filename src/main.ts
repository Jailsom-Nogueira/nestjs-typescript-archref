// Libs
import * as fs from 'fs'
import * as path from 'path';
// import { ServerOptions } from 'https';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// Self
import { AppModule } from './App/AppModule';

// const httpsOptions: ServerOptions = {
//   key: fs.readFileSync(path.resolve(__dirname, '../ssl/server.key')),
//   cert: fs.readFileSync(path.resolve(__dirname, '../ssl/server.cert')),
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3030

  // const app = await NestFactory.create(AppModule, {
  //   httpsOptions,
  //   // cors: {
  //   //   allowedHeaders: '*', // Use this for local tests only. Do not commit or deploy it.
  //   // }
  // })

  const pkg = JSON.parse(
    fs
    .readFileSync(path.resolve(__dirname, '../package.json'))
    .toString('utf-8'),
  );

  const config = new DocumentBuilder()
  .setTitle(pkg.name)
  .setDescription(pkg.description)
  .setVersion(pkg.version)
  .addTag(pkg.keywords)
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
    
  await app.listen(port);

  console.log(
    '', `Server is running at htpp://localhost:${port}/`, 
    '\n', `Swagger is running at htpp://localhost:${port}/api`
  )
}
bootstrap();
