import React , {useState} from 'react'
import { Container, Form, Button } from "react-bootstrap";
// import './Sidebar.css';

function Setting() {
  const [username, setUsername] = useState("Superadmin");
  const [email, setEmail] = useState("superadmin@example.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Settings Saved:", {
      username,
      email,
      password,
      confirmPassword,
    });
  };
  return (
    <Container className="mt-5">
    <h2 className='fw-bold mb-3'>Settings</h2>
    <Form className="settings-form" onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="confirm-password">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      <Button type="submit" variant="" className="mt-2" style={{backgroundColor:"#082f49",color:"white"}}>
        Save Changes
      </Button>
    </Form>
  </Container>
  )
}

export default Setting
