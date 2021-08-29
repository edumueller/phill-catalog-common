import { Subjects } from './subjects';

export interface ProductSyncCompleteEvent {
  subject: Subjects.ProductSyncComplete;
  data: {
    id: string;
    version: number;
  };
}
