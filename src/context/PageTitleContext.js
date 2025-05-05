import React, { createContext, useState, useContext } from 'react';

const PageTitleContext = createContext();
export const usePageTitle = () => useContext(PageTitleContext);
export const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('Home');
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