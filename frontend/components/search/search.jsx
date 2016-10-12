import React from 'react';
import { withRouter } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };

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
      })
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ query: e.target.value });
    // this.props.removeSerie();
    // if (this.state.query === '') {
    //   this.props.router.push('/');
    // } else {
      // this.setState({ query: e.target.value });
      // this.props.requestSearchResults(this.state, () => {
      //   this.props.router.push({
      //     pathname: 'search',
      //     query: this.state
      //   })
      // });
    // }
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

export default withRouter(Search);
