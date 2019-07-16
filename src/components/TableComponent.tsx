import React from 'react';
import Table from 'react-bootstrap/Table';
import Loader from './Loader';

interface ITableProps  {
  headers: Array<any>;
  data: Array<any>;
  isLoading: boolean;
}

const TableComponent = ({ headers, data, isLoading }: ITableProps) => {
  if (isLoading) {
    return <Loader />
  } else {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers.map(header => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map(
            item => <tr key={item.id}>
              {headers.map(header => <td key={`${item.id}-${header}`}>{item[header]}</td>)}
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
};

export default TableComponent;
