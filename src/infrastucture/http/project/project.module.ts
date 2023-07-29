import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { CreateProjectUseCase } from '@/domain/application/use-cases/create-project';

@Module({
  imports: [],
  controllers: [ProjectController],
  providers: [CreateProjectUseCase],
})
export class ProjectModule { }
