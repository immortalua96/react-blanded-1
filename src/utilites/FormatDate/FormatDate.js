import { formatDistanceToNow, format } from 'date-fns';

export function formatDate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatDataNew(data) {
  return format(new Date(data), 'Pp');
}
