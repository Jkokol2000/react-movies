import { useState } from 'react';

export default function LoginPage(props) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onLogin(username);
  }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Login Here</h1>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
