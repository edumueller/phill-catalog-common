import { CustomError } from './custom-error';

export class ProductSyncPostError extends CustomError {
  statusCode = 500;
  reason = 'Error posting to supply chain api';

  constructor() {
    super('Error posting to supply chain api');

    Object.setPrototypeOf(this, ProductSyncPostError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
