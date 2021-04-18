import IconButton from '@material-ui/core/IconButton';
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';

import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ searchQuery, onSetFilter, onReset }) => {
  return (
    <div className={s.filter}>
      <label>
        <span className={s.label}>Filter</span>
        <input
          type="text"
          name="filter"
          className={s.input}
          value={searchQuery}
          onChange={evt => onSetFilter(evt.target.value)}
        />
      </label>

      <IconButton aria-label="delete" onClick={() => onReset(onSetFilter)}>
        {searchQuery && <RotateLeftOutlinedIcon />}
      </IconButton>
    </div>
  );
};

Filter.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSetFilter: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Filter;
