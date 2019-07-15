import React from 'react';
import Table from 'react-bootstrap/Table';

interface ITableProps  {
  headers: Array<any>;
  data: Array<any>;
}

const TableComponent = ({ headers, data }: ITableProps) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headers.map(header => <th>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map(
          item => <tr>
            {headers.map(header => <td>{item[header]}</td>)}
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TableComponent;
