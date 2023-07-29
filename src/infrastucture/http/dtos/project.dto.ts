import { CreateProjectRequest } from '@/domain/application/use-cases/create-project';
import { IsString } from 'class-validator';

export class ProjectDto implements CreateProjectRequest {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
