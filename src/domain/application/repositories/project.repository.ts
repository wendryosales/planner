import { Project } from '@/domain/enterprise/entities/project';

export interface IProjectRepository {
  create(project: Project): Promise<void>;
}
