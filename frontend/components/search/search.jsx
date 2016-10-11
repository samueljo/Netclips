import React from 'react';
import { hashHistory } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestSearchResults(this.state);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <div className='search-bar'>
        <form onSubmit={this.handleSubmit}>
          <div className='mag'>🔍</div>
          <input
            className='search-form'
            type='text'
            onChange={this.handleChange}
            value={this.state.query}
            placeholder='Search'>
          </input>
        </form>
      </div>
    );
  }
}

export default Search;
