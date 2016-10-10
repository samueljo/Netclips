import React from 'react';
import { hashHistory } from 'react-router';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0, body: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnToSerieShow = this.returnToSerieShow.bind(this);
  }

  returnToSerieShow() {
    const serieUrl = '/benches/' + this.props.params.serieId;
    hashHistory.push(serieUrl);
  }

  handleSubmit(e) {
    e.preventDefault();
    const serieId = parseInt(this.props.params.serieId);
    const review = Object.assign(
      {},
      this.state,
      { serie_id: serieId }
    );
    this.props.createReview({review});
  }

  update(property) {
    return (e) => {
      this.setState({
        [property]: e.currentTarget.value
      });
    };
  }

  render() {
    return (
      <div className='review-form'>
        <form onSubmit={this.handleSubmit}>
          <label>Rating</label>
          <br/>
          <input type="number"
            value={this.state.rating}
            onChange={this.update.bind(this, 'rating')} />
          <br/>
          <label>Body</label>
          <br/>
          <textarea
            cols='30'
            rows='10'
            value={this.state.body}
            onChange={this.update('body')}></textarea>
          <br/>
          <input type='submit'/>
        </form>
        <button onClick={this.returnToSerieShow}>Cancel</button>
      </div>
    );
  }
}

export default ReviewForm;
