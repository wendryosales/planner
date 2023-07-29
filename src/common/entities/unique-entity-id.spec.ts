import { UniqueEntityId } from './unique-entity-id';

describe('UniqueService', () => {
  it('should be defined', () => {
    expect(new UniqueEntityId()).toBeDefined();
  });

  it('should be return the same inserted id', () => {
    const id = new UniqueEntityId('1');
    expect(id.toString()).toEqual('1');
  });
});
