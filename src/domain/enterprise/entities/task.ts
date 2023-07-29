import { BaseEntity } from 'src/common/entities/base-entity';
import { UniqueEntityId } from 'src/common/entities/unique-entity-id';
import { Priority } from 'src/common/types/priority';
import { Label } from './label';

interface TaskProps {
  name: string;
  description: string;
  assignId: UniqueEntityId;
  difficulty: number | string;
  registrationDate: Date;
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
