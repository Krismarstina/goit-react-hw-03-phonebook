import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onFilter }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onFilter}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
