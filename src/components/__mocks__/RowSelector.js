import React from 'react';

class RowSelector extends React.PureComponent {
  render() {
    return (
      <form>
        <label htmlFor="mockSelect">Show rows:</label>
        <select id="mockSelect">
          <option value="mock">mock</option>
        </select>
      </form>
    );
  }
}

export default RowSelector;
