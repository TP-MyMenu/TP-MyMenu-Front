import React from 'react';
import useAxios from 'axios-hooks';

import Meals from './component';

const MealsContainer = () => {
  const [{ data, loading, error }] = useAxios(
    'http://0.0.0.0:8000/api/dishes/'
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
 
  return (
      <Meals dishes={data} />
  );
};

export default MealsContainer;
