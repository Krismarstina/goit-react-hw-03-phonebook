import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, FormLabel, FormInput, FormButton } from './ContactsForm.styled';

const initialState = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = {
    ...initialState,
  };

  inputNameId = nanoid();
  inputNumberId = nanoid();

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state);

    this.setState(initialState);
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <FormLabel htmlFor={this.inputNameId}>
          Name
          <FormInput
            type="text"
            name="name"
            id={this.inputNameId}
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel htmlFor={this.inputNumberId}>
          Number
          <FormInput
            type="tel"
            id={this.inputNumberId}
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func,
};
