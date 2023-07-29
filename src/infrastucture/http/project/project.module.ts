import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { CreateProjectUseCase } from '@/domain/application/use-cases/create-project';
import { PrismaService } from '@/infrastucture/database/prisma.service';
import { ProjectRepository } from '@/infrastucture/database/repositories/project.repository';

@Module({
  imports: [],
  controllers: [ProjectController],
  providers: [
    CreateProjectUseCase,
    {
      provide: 'IProjectRepository',
      useClass: ProjectRepository,
    },
    PrismaService,
  ],
})
export class ProjectModule {}
