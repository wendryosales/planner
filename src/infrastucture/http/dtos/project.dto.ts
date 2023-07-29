import { CreateProjectRequest } from '@/domain/application/use-cases/create-project';
import { IsOptional, IsString } from 'class-validator';

export class ProjectDto implements CreateProjectRequest {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}
