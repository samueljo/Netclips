import React from 'react';
import SerieOverview from './serie_overview';

class SeriesShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPanel: null };
  }

  componentDidMount() {
    this.setState({ showPanel: 'overview' });
  }

  render() {
    let showPanel;
    if (this.state.showPanel === 'overview') {
      showPanel = <SerieOverview serieDisplay={this.props.serieDisplay}/>;
    } else {
      showPanel = <div></div>;
    }
    // else if (this.state.showPanel)
    return (
      <div>
        {showPanel}
      </div>
    );
  }
}
export default SeriesShow;
