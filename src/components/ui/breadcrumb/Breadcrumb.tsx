import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const Breadcrumb = () => {
  const location = useLocation();

  return <div>{location.pathname}</div>;
};

export default Breadcrumb;
