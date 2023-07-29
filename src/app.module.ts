import { Module } from '@nestjs/common';
import { ProjectModule } from './infrastucture/http/project/project.module';

@Module({
  imports: [ProjectModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
