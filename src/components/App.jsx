import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import React, { Component } from 'react';
import { ContactForm } from './ContactsForm/ContactsForm';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLocalStorage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsFromLocalStorage);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContacts = ({ name, number }) => {
    const contactForList = { id: nanoid(4), name, number };
    const condition = this.state.contacts.some(
      contact => contact.name === name
    );

    if (condition) {
      Notify.info(`${name} is already exist!`);
      return;
    }

    this.setState(prev => ({ contacts: [...prev.contacts, contactForList] }));
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  onFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    console.log(filter);

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onButtonDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.handleAddContacts} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onFilter={this.handleFilter} />
        <ContactList
          contacts={this.onFilteredContacts()}
          onDelete={this.onButtonDelete}
        />
      </>
    );
  }
}
