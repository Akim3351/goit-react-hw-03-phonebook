import React, { Component } from "react";
import shortid from "shortid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactsList from "./components/ContactsList/ContactsList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    if (localStorage.getItem("contacts")) {
      const savedContacts = JSON.parse(localStorage.getItem("contacts"));
      this.setState((prevState) => ({
        contacts: [...savedContacts],
      }));
    }
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  onAddContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    const contactAllreadyExists = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (contactAllreadyExists) {
      toast.error(`${newContact.name} is already in contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
      toast.success(`${newContact.name} added to your contacts`);
    }
  };

  onSearch = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onFilterChange = (e) => {
    const target = e.target.value;
    this.setState({
      filter: target,
    });
  };

  onDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.onSearch();

    return (
      <div className="App">
        <h1> Phonebook </h1>
        <ContactForm onAddContact={this.onAddContact} />

        <h2> Contacts </h2>
        <Filter filter={filter} onSearch={this.onFilterChange} />
        <ContactsList contacts={filteredContacts} onDelete={this.onDelete} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
