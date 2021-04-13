import IconButton from '@material-ui/core/IconButton';
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';

import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ searchFilter, handler, reset }) {
  return (
    <div className={s.filter}>
      <label>
        <span className={s.label}>Filter</span>
        <input
          type="text"
          name="filter"
          className={s.input}
          value={searchFilter}
          onChange={handler}
        />
      </label>

      <IconButton aria-label="delete" onClick={reset}>
        {searchFilter && <RotateLeftOutlinedIcon />}
      </IconButton>
    </div>
  );
}

Filter.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
