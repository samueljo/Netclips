import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    const query = (this.props.query || '');
    this.state = { query: `${query}` };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.removeSerie();
    this.props.requestSearchResults(this.state, () => {
      this.props.router.push({
        pathname: 'search',
        query: this.state
      });
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ query: e.target.value });
    this.props.removeSerie();
    if (this.state.query && e.target.value === '') {
      this.props.router.push('/');
    } else {
      const tempState = { query: e.target.value };
      this.props.requestSearchResults(tempState, () => {
        this.props.router.push({
          pathname: 'search',
          query: tempState
        });
      });
    }
  }

  render() {
    return (
      <div className='search-bar'>
        <form onSubmit={this.handleSubmit}>
          <div className='mag'>🔍</div>
          <input
            ref='searchBar'
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

export default withRouter(Search);
