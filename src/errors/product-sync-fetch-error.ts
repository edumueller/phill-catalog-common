import { CustomError } from './custom-error';

export class ProductSyncFetchError extends CustomError {
  statusCode = 500;
  reason = 'Error fetching product from supply chain api';

  constructor() {
    super('Error fetching product from supply chain api');

    Object.setPrototypeOf(this, ProductSyncFetchError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
