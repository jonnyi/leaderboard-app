import React from 'react';

class RowSelector extends React.PureComponent {
  constructor(props) {
    super(props);
    this.rowCountChange = this.rowCountChange.bind(this);
  }

  rowCountChange(event) {
    this.props.updateRowCount(event.target.value);
  }

  render() {
    return (
      <form className="form-inline">
        <label className="mr-sm-2" htmlFor="rowCountSelect">
          Show rows:
        </label>
        <select
          id="rowCountSelect"
          className="custom-select mb-2 mr-sm-2 mb-sm-0"
          value={this.props.rowCount}
          onChange={this.rowCountChange}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </form>
    );
  }
}

export default RowSelector;
