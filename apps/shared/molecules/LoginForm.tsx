import React, { useState } from 'react';
import { TextInput, Button } from './atoms';

type LoginFormProps = {
  onSignIn: (credentials: { username: string; password: string }) => void;
};

// Login Form Molecule Component
export const LoginForm = ({ onSignIn }: LoginFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSignIn({ username, password });
  };

  return (
    <form onSubmit={handleSignIn}>
      <TextInput
        label="Username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        label="Password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label="Sign In" onClick={() => handleSignIn} />
    </form>
  );
};

type SearchFormProps = {
  onSubmit: (query: string) => void;
};

// Search Form Molecule Component
export const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Search"
        placeholder="Enter your query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button label="Search" onClick={() => handleSubmit} />
    </form>
  );
};