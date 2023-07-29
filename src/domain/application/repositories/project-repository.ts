import { Project } from '@/domain/enterprise/entities/project';

export interface ProjectRepository {
  create(project: Project): Promise<void>;
}
