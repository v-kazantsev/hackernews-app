import moment from 'moment';
import { DATE_TIME_FORMAT } from '@/config/constants';

export const formatUnixTime = (time: number) => {
  return moment.unix(time).format(DATE_TIME_FORMAT)
}
