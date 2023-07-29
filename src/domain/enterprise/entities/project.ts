import { BaseEntity } from 'src/common/entities/base-entity';
import { UniqueEntityId } from 'src/common/entities/unique-entity-id';

interface ProjectProps {
  title: string;
  description: string;
  createdAt: Date;
}

export class Project extends BaseEntity<ProjectProps> {
  static create(
    props: Omit<ProjectProps, 'registrationDate'>,
    id?: UniqueEntityId,
  ) {
    return new Project({ ...props, createdAt: new Date() }, id);
  }
}
