import React from 'react';

class ResultsRow extends React.PureComponent {
  render() {
    const { rowData, rowNumber } = this.props;
    return (
      <tr>
        <td>{rowNumber}</td>
        <td>
          <img
            className="avatar"
            src={rowData.img}
            alt={`Avatar image for ${rowData.username}`}
            height="30"
            width="30"
          />
          <a href={`https://www.freecodecamp.com/${rowData.username}`}>
            {rowData.username}
          </a>
        </td>
        <td>{rowData.recent}</td>
        <td>{rowData.alltime}</td>
      </tr>
    );
  }
}

export default ResultsRow;
