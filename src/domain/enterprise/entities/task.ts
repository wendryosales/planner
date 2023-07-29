import { BaseEntity } from 'src/common/entities/base-entity';
import { UniqueEntityId } from 'src/common/entities/unique-entity-id';
import { Priority } from 'src/common/types/priority';
import { Label } from './label';

interface TaskProps {
  title: string;
  description?: string;
  assignId: UniqueEntityId;
  difficulty: string;
  createdAt: Date;
  priority: Priority;
  epicId: UniqueEntityId;
  labels: Label[];
  term: Date;
}

export class Task extends BaseEntity<TaskProps> {
  static create(props: TaskProps, id?: UniqueEntityId) {
    return new Task(props, id);
  }
}
