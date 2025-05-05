import React, { createContext, useState, useContext } from 'react';

// Create context
const PageTitleContext = createContext();

// Custom hook for using the context
export const usePageTitle = () => useContext(PageTitleContext);

// Provider component
export const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('Home');

  // Value to be provided to consumers
  const value = {
    pageTitle,
    setPageTitle
  };

  return (
    <PageTitleContext.Provider value={value}>
      {children}
    </PageTitleContext.Provider>
  );
};