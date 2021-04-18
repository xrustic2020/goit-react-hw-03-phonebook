import { toast } from 'react-toastify';

export default function resetFilter(setFilter) {
  toast.success('Filter cleaned successfully');
  setFilter('');
}

// export default function resetFilter() {
//   toast.success('Filter cleaned successfully');
//   this.setState({ filter: '' });
// }
