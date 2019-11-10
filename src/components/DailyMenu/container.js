import React from 'react';
import useAxios from 'axios-hooks';

import DailyMenu from './component';

const DailyMenuContainer = () => {
  const [{ data, loading, error }] = useAxios(
    'http://0.0.0.0:8000/api/day_dish/'
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
 
  return (
      <DailyMenu menu={data} />
  );
};

export default DailyMenuContainer;
