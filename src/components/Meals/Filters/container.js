import React from 'react';
import useAxios from 'axios-hooks';

import Filters from './component';

const FiltersContainer = ({filters, setFilters}) => {
  const [{ data, loading, error }] = useAxios(
    'http://0.0.0.0:8000/api/dish_category/'
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
 
  return (
      <Filters categories={data} filters={filters} setFilters={setFilters} />
  );
};

export default FiltersContainer;
