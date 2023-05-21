import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    addName = (e) => {
        this.setState({ name: e.currentTarget.value })
    }

    addNumber = (e) => {
        this.setState({ number: e.currentTarget.value })
    }

    addContact = () => {
        const { name, number } = this.state;

        const contact = {
            name,
            number,
            id: nanoid()
        }

        if (name === '') {
            return;
        }

        this.props.addContact(contact);

        this.setState({
            name: '',
            number: ''
        });

    }

    render() {
        const { name, number } = this.state;
        return (
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
        )
    }

}


ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};

export default ContactForm;