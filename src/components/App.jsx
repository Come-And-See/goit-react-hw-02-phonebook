import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { ContactList } from './contacts/ContactList';
import { Filter } from './contacts/Filter';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  }



  addName = (e) => {
    this.setState({ name: e.currentTarget.value })
  }

  addNumber = (e) => {
    this.setState({ number: e.currentTarget.value })
  }


  addContact = (e) => {
    const { name, contacts, number } = this.state;

    const contact = {
      name,
      number,
      id: nanoid()
    }

    if (name === '') {
      return;
    }

    this.setState({
      contacts: [contact, ...contacts],
      name: '',
      number: ''
    });

  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  resultFilter = () => {
    const { contacts, filter } = this.state;

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
    const { name, number, filter } = this.state;

    return (
      <div>

        <h1>Phonebook</h1>
        <div>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={this.addName}
              required
            />
          </label>
          <label htmlFor="number">Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={this.addNumber}
              required
            /></label>
          <button type='button' onClick={this.addContact}>Add contact</button>
        </div>

        <h2>Contacts</h2>

        <h3>Find contacts by name</h3>

        <input type="text" value={filter} onChange={this.changeFilter} />

        <Filter changeFilter={this.changeFilter} />
        <ContactList filter={this.resultFilter()} render={this.renderContact} />

      </div>
    )

  }
};


export default App;