import { CustomError } from './custom-error';

export class ProductSyncVersionError extends CustomError {
  statusCode = 400;
  reason = 'Error missing a previous doc version update';

  constructor() {
    super('Error missing a previous doc version update');

    Object.setPrototypeOf(this, ProductSyncVersionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
