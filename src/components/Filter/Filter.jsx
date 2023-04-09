import { FilterBox } from './FilterBox.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterBox>
      <label htmlFor="exampleInputName">Find contacts by name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value}
        onChange={onChange}
      />
    </FilterBox>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
