import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { Project } from '@/domain/enterprise/entities/project';
import { IProjectRepository } from '@/domain/application/repositories/project.repository';

@Injectable()
export class ProjectRepository implements IProjectRepository {
  constructor(private prisma: PrismaService) {}

  async create(project: Project) {
    await this.prisma.projects.create({
      data: {
        id: project.id.toString(),
        title: project.title,
        description: project.description,
        createdAt: project.createdAt,
      },
    });
  }
}
