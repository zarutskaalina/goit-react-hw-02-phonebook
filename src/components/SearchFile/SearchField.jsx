import { Component } from 'react';
import style from './SearchFile.module.css';

export class SearchField extends Component {
  state = {
    originalContacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    errorMessage: null,
    contacts: [],
  };

  handleInputSearch = e => {
    const filter = e.target.value.toLowerCase();
    const filteredContacts = this.state.originalContacts.filter(contact =>
      contact.name.toLowerCase().startsWith(filter)
    );

    console.log(filteredContacts);

    this.setState({
      filter: filter,
      contacts: filter === '' ? this.state.originalContacts : filteredContacts,
      // стан оновлюється, але інтерфейс чомусь не перемальовується,
      errorMessage:
        filter !== '' && filteredContacts.length === 0
          ? 'Sorry, no matching contacts found!'
          : null,
    });
  };

  render() {
    return (
      <div>
        <h4 className={style.title}>Find contact by name</h4>
        <input
          className={style.searchContact}
          type="search"
          name="filter"
          value={this.state.filter}
          onChange={this.handleInputSearch}
        />
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
      </div>
    );
  }
}
