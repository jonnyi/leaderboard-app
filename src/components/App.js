// TODO: Add propTypes
// TODO: Add test for async

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResultsTable from './ResultsTable';
import * as ActionCreators from '../store/actionCreators';

import './styles/styles.scss';

class App extends React.PureComponent {
  render() {
    const {
      dispatch,
      scoreData,
      rowCount,
      tableTitle,
      loadingFlag
    } = this.props;
    const updateTitle = bindActionCreators(
      ActionCreators.updateTitle,
      dispatch
    );
    const updateRowCount = bindActionCreators(
      ActionCreators.updateRowCount,
      dispatch
    );
    const updateLoadingFlag = bindActionCreators(
      ActionCreators.updateLoadingFlag,
      dispatch
    );

    const updateTableData = bindActionCreators(
      ActionCreators.updateTableData,
      dispatch
    );

    return (
      <div>
        <div className="navbar navbar-inverse bg-inverse">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand">
              Campers Score App
            </a>
          </div>
        </div>

        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">{tableTitle}</h1>
            <p className="lead text-muted">
              A simple app showing the current free code camp leaders. Sort by
              recent scores or by all time scores.
            </p>
          </div>
        </section>

        <div className="container">
          <main role="main">
            <div className="row marketing">
              <div className="col-lg-12">
                <ResultsTable
                  updateRowCount={updateRowCount}
                  updateTableData={updateTableData}
                  updateTitle={updateTitle}
                  updateLoadingFlag={updateLoadingFlag}
                  scoreData={scoreData}
                  rowCount={rowCount}
                  loadingFlag={loadingFlag}
                />
              </div>
            </div>
          </main>
        </div>

        <footer className="text-muted">
          <div className="container">
            <p>© jonnyirving</p>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tableTitle: state.tableTitle,
  rowCount: state.rowCount,
  scoreData: state.scoreData,
  loadingFlag: state.loadingFlag
});

export default connect(mapStateToProps)(App);
