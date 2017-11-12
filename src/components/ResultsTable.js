import React from 'react';
import RowSelector from './RowSelector';
import ResultsRow from './ResultsRow';

class ResultsTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.sortBy = this.sortBy.bind(this);
    this.state = {
      tableSortedBy: 'recent'
    };
  }

  componentDidMount() {
    this.props.updateTableData('recent');
  }

  sortBy(sortByValue) {
    this.props.updateLoadingFlag(true);
    this.props.updateTableData(sortByValue);
    this.props.updateTitle(
      sortByValue == 'recent'
        ? 'Top scores in the last 30 days!'
        : 'Top scores of all time!'
    );
    this.setState({
      tableSortedBy: sortByValue
    });
  }

  render() {
    const { updateRowCount, rowCount, scoreData, loadingFlag } = this.props;
    const { tableSortedBy } = this.state;
    const scoreDataTrimmed = scoreData.slice(0, rowCount);
    const isSortedByRecent = tableSortedBy == 'recent' ? true : false;
    if (loadingFlag) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <div id="results-table">
          {loadingFlag}
          <RowSelector updateRowCount={updateRowCount} rowCount={rowCount} />
          <div className="table-responsive">
            <table className="table table-sm table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th
                    id="recent-selector"
                    className={isSortedByRecent ? 'selected thCta' : 'thCta'}
                    onClick={() => this.sortBy('recent')}
                  >
                    Last 30 Days
                  </th>
                  <th
                    id="alltime-selector"
                    className={!isSortedByRecent ? 'selected thCta' : 'thCta'}
                    onClick={() => this.sortBy('alltime')}
                  >
                    All time score
                  </th>
                </tr>
              </thead>
              <tbody>
                {scoreDataTrimmed.map((row, i) => (
                  <ResultsRow key={i} rowData={row} rowNumber={i + 1} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}
export default ResultsTable;
