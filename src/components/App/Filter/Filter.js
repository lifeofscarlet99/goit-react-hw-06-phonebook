// import PropTypes from 'prop-types';
// import css from './Filter.module.css';

// function Filter({ filter, changeFilter }) {
//   return (
//     <label className={css.label}>
//       <p className={css.text}>Find contacts by name</p>
//       <input
//         className={css.input}
//         type="text"
//         value={filter}
//         onChange={changeFilter}
//       />
//     </label>
//   );
// }

// Filter.prototype = {
//   filter: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// };

// export default Filter;
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contacts-slice';
import { Label, Text, Input } from './Filter.styled';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input type="text" value={filter} onChange={changeFieldFilter} />
    </Label>
  );
}

export default Filter;
