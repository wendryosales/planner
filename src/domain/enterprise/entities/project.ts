import { BaseEntity } from 'src/common/entities/base-entity';
import { UniqueEntityId } from 'src/common/entities/unique-entity-id';

interface ProjectProps {
  title: string;
  description: string;
  registrationDate: Date;
}

export class Project extends BaseEntity<ProjectProps> {
  static create(
    props: Omit<ProjectProps, 'registrationDate'>,
    id?: UniqueEntityId,
  ) {
    return new Project({ ...props, registrationDate: new Date() }, id);
  }
}
