import get from 'lodash/get';
import thaiResource from './content';

export const translate = (key, language) => {
  return get(thaiResource, `${key}.${language}`);
};
