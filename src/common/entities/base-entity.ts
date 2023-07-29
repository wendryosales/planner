import { UniqueEntityId } from './unique-entity-id';

export abstract class BaseEntity<T> {
  private _id: UniqueEntityId;
  protected readonly props: T;

  get id(): UniqueEntityId {
    return this._id;
  }

  constructor(props: T, id?: UniqueEntityId) {
    this.props = props;
    this._id = id ?? new UniqueEntityId();
  }
}
