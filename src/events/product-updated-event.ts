import { Subjects } from './subjects';

export interface ProductUpdatedEvent {
  subject: Subjects.ProductUpdated;
  data: {
    id: string;
    version: number;
    name: string;
    price: number;
    quantity: string;
  };
}
