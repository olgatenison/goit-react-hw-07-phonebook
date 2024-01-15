// Filter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  // Обробник події зміни фільтрації
  const onChangeFilter = event => {
    // Отримання значення з інпута та видалення зайвих пробілів
    const inputValue = event.target.value.trim();
    // Відправка дії зміни фільтра в Redux store
    dispatch(setFilter(inputValue));
  };

  return (
    <div>
      <h3 className={css.txt}>Find contacts by name</h3>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default Filter;
