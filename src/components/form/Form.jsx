import React from "react";
import { useInput } from "hooks/useInput";

export const Form = () => {

    const name = useInput('');
    const number = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name.value, number.value);
        name.reset();
        number.reset();
      };

return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">
          Name
          <input
            type="text"
            value={name.value}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={name.onChange}
            placeholder="Name please"
          />
        </label>

        <label htmlFor="">
            Number
          <input
            type="tel"
            value={number.value}
            onChange={number.onChange}
            placeholder="Number please"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="Submit">
          Add Contact
        </button>
      </div>
    </form>
)
}