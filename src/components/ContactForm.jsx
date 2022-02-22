import React, { Component } from "react";
import css from "./ContactForm.module.css";
import propTypes from "prop-types";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  onFormChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onAddContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={css.input__form} onSubmit={this.onFormSubmit}>
        <label className={css.input__label}>
          <p>name</p>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onFormChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.input__label}>
          <p>number</p>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.onFormChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: propTypes.func.isRequired,
};

export default ContactForm;
