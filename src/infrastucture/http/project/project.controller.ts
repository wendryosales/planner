import { CreateProjectUseCase } from '@/domain/application/use-cases/create-project';
import { Body, Controller, Post } from '@nestjs/common';
import { ProjectDto } from '../dtos/project.dto';
import { ProjectCreatedPresenter } from '../presenters/project-created.presenter';

@Controller('project')
export class ProjectController {
  constructor(private readonly createProject: CreateProjectUseCase) {}

  @Post()
  async create(
    @Body() projectDto: ProjectDto,
  ): Promise<ProjectCreatedPresenter> {
    return this.createProject.execute(projectDto);
  }
}
