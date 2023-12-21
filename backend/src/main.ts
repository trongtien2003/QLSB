import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5001;
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:5000',
      'http://localhost:5173',
      process.env.REACT_URL,
    ],
    credentials: true,
  });
  await app.listen(port);
  console.log(`Your server is running on http://localhost:${port}`);
}
bootstrap();
