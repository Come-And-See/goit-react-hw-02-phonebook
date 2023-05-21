import React, { Component } from 'react';
import { ContactList } from './contacts/ContactList';
import { Filter } from './contacts/Filter';
import ContactForm from './contacts/ContactForm';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  addContact = (contact) => {
    console.log(contact.name);

    // this.changeFilter(contact.name)

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts]
    }));
  }


  checkDuplicates = (name) => {
    const { contacts } = this.state;
    console.log("contacts:", contacts)

    console.log("name", name);
    


    if (name === Object.keys(contacts)) {
      console.log("object");
    }


  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  resultFilter = () => {
    const { contacts, filter } = this.state;

    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact => (
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    ));

  }

  renderContact = (array) => {
    return array.map((contact) => (
      <li key={contact.id}>{contact.name} : {contact.number} </li>
    ))
  }


  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter changeFilter={this.changeFilter} />
        <ContactList filter={this.resultFilter()} render={this.renderContact} />
      </div>
    )

  }
};



export default App;