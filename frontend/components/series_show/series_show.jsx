import React from 'react';
import SerieOverview from './serie_overview';

class SeriesShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPanel: 'overview' };
  }

  renderOverview() {
    
  }

  renderDetail() {

  }

  renderEpisodes() {

  }

  render() {
    let showPanel;
    if (this.state.showPanel === 'overview') {
      showPanel = <div>SerieOverview</div>;
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
