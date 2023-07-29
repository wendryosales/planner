import { Project } from 'src/domain/enterprise/entities/project';
import { Inject } from '@nestjs/common';
import { IProjectRepository } from '../repositories/project.repository';

export interface CreateProjectRequest {
  title: string;
  description?: string;
}

interface CreateProjectResponse {
  message: string;
}

export class CreateProjectUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly repository: IProjectRepository,
  ) {}

  async execute(payload: CreateProjectRequest): Promise<CreateProjectResponse> {
    const project = Project.create(payload);
    await this.repository.create(project);
    return { message: 'Project created successfully' };
  }
}
