import React from 'react';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts.js/contactSlice';
import { nanoid } from 'nanoid';

export const Form = () => {
  const user = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const inputId = nanoid();
  const inputSecId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const infoUser = {
      name,
      number,
      id: nanoid(),
    };

    dispatch(addContact(infoUser));

    reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={inputId}>
          Name
          <input
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={inputId}
            placeholder="Name pleasfsdfds"
          />
        </label>

        <label htmlFor={inputSecId}>
          Number
          <input
            type="tel"
            value={number}
            name="number"
            onChange={handleChange}
            placeholder="Number please"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={inputSecId}
            required
          />
        </label>

        {/* <select name="year[]" required>
          <option disabled>Выберите героя</option>
          <option value="Чебурашка">Чебурашка</option>
          <option selected value="Крокодил Гена">
            Крокодил Гена
          </option>
          <option value="Шапокляк">Шапокляк</option>
          <option value="Крыса Лариса">Крыса Лариса</option>
        </select> */}

        <button type="submit">Add Contact</button>
      </div>

      {user &&
        user.map(item => {
          return (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <h3>{item.number}</h3>
            </li>
          );
        })}
    </form>
  );
};
