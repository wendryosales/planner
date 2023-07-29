import { BaseEntity } from 'src/common/entities/base-entity';
import { UniqueEntityId } from 'src/common/entities/unique-entity-id';

interface ProjectProps {
  title: string;
  description?: string;
  createdAt: Date;
}

export class Project extends BaseEntity<ProjectProps> {
  get title() {
    return this.props.title;
  }

  get description() {
    return this.props.description;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  static create(props: Omit<ProjectProps, 'createdAt'>, id?: UniqueEntityId) {
    return new Project({ ...props, createdAt: new Date() }, id);
  }
}
