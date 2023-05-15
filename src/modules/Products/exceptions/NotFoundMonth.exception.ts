import { DefaultError } from '../../../common';

class NotFoundMonthException extends DefaultError {}

export const throwNotFoundMonth = () => {
  throw new NotFoundMonthException(
    'Данных для выбранных месяца и фабрики не существует',
  );
};
