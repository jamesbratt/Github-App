import React from 'react';
import Alert from 'react-bootstrap/Alert';

interface AlertProps  {
  message: string;
}

const AlertComponent = ({ message }: AlertProps) => {
  return (
    <Alert variant='danger'>
      {message}
    </Alert>
  );
};

export default AlertComponent;
