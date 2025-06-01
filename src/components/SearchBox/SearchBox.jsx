import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const filterValue = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="name">Find contacts by name</label>
      <input
        type="text"
        name="name"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
}
