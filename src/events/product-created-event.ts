import { Subjects } from './subjects';

export interface ProductCreatedEvent {
  subject: Subjects.ProductCreated;
  data: {
    id: string;
    version: number;
    name: string;
    price: number;
    quantity: string;
  };
}
