import { randomUUID } from 'node:crypto';

export class UniqueEntityId {
  private value: string;

  constructor(value?: string) {
    this.value = value ?? this.generate();
  }

  private generate(): string {
    return randomUUID();
  }

  public toString(): string {
    return this.value;
  }
}
