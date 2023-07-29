import { BaseEntity } from 'src/common/entities/base-entity';
import { UniqueEntityId } from 'src/common/entities/unique-entity-id';

interface LabelProps {
  name: string;
  color: string;
}

export class Label extends BaseEntity<LabelProps> {
  static create(props: LabelProps, id?: UniqueEntityId) {
    return new Label(props, id);
  }
}
