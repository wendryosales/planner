import { Project } from 'src/domain/enterprise/entities/project';
import { ProjectRepository } from '../repositories/project-repository';

export interface CreateProjectRequest {
  title: string;
  description: string;
}

interface CreateProjectResponse {
  message: string;
}

export class CreateProjectUseCase {
  constructor(private readonly repository: ProjectRepository) { }

  async execute(payload: CreateProjectRequest): Promise<CreateProjectResponse> {
    const project = Project.create(payload);
    await this.repository.create(project);
    return { message: 'Project created successfully' };
  }
}
