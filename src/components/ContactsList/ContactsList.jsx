import React, { Component } from "react";
import ContactsListItem from "../ContactsListItem/ContactsListItem";
import css from "./ContactsList.module.css";
import propTypes from "prop-types";

class ContactsList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul className={css.contacts__list}>
        {contacts.map((contact) => {
          const { id, name, number } = contact;
          return (
            <ContactsListItem
              id={id}
              name={name}
              number={number}
              onDelete={onDelete}
              key={id}
            />
          );
        })}
      </ul>
    );
  }
}

ContactsList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: propTypes.func.isRequired,
};

export default ContactsList;
