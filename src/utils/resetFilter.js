import { toast } from 'react-toastify';

export default function resetFilter() {
  toast.success('Filter cleaned successfully');
  this.setState({ filter: '' });
}
