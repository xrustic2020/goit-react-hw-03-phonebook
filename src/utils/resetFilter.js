import { toast } from 'react-toastify';

export default function resetFilter(setFilter) {
  toast.success('Filter cleaned successfully');
  setFilter('');
}
