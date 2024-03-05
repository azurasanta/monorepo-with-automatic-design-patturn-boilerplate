import React from 'react';
import { LoginForm, SearchForm } from './molecules';

// User Authentication Organism Component
export const Authentication = () => {
  const handleSignIn = (credentials: { username: string; password: string }) => {
    // Authenticate user
  };

  return (
    <>
      <h2>Sign In</h2>
      <LoginForm onSignIn={handleSignIn} />
    </>
  );
};

// Search Organism Component
export const SearchPage = () => {
  const handleSearch = (query: string) => {
    // Perform search
  };

  return (
    <>
      <h2>Search</h2>
      <SearchForm onSubmit={handleSearch} />
    </>
  );
};