import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

interface IFormProps  {
  update: Function;
}

const usernameRef = React.createRef<any>();
const resourceRef = React.createRef<any>();

const FormComponent = ({ update }: IFormProps) => {

  const submit = () => {
    const selectedUsername = usernameRef.current.value;
    const selectedResource = resourceRef.current.value;
    update(selectedUsername, selectedResource);
  }

  return (
    <Form>
      <Form.Row>
        <Col>
          <Form.Control ref={usernameRef} placeholder="Github Username" />
        </Col>
        <Col>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control ref={resourceRef} as="select">
              <option value="repos">Repositories</option>
              <option value="orgs">Organisations</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Button onClick={() => submit()} variant="primary">Search</Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default FormComponent;
