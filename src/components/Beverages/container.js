import React from 'react';
import useAxios from 'axios-hooks';

import Beverages from './component';

const BeveragesContainer = () => {
  const [{ data, loading, error }] = useAxios(
    'http://0.0.0.0:8000/api/drinks/'
  )

  console.log({ data });

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
 
  return (
      <Beverages beverage={data} />
  );
};

export default BeveragesContainer;