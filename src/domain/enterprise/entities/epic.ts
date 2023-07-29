import { Priority } from 'src/common/types/priority';
import { Label } from './label';
import { BaseEntity } from 'src/common/entities/base-entity';
import { UniqueEntityId } from 'src/common/entities/unique-entity-id';

interface EpicProps {
  title: string;
  description: string;
  createdAt: Date;
  priority: Priority;
  projectId: UniqueEntityId;
  labels: Label[];
  term: Date;
}

export class Epic extends BaseEntity<EpicProps> {
  static create(props: EpicProps, id?: UniqueEntityId) {
    return new Epic(props, id);
  }
}
