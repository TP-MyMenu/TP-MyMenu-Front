import React from 'react';
import useAxios from 'axios-hooks';

import Payment from './component';

const PaymentContainer = () => {
  const [{ data, loading, error }] = useAxios(
    'http://0.0.0.0:8000/api/payment_method/'
  )

  console.log(data);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
 
  return (
    <div>
      <Payment methods={data} />
    </div>
  );
};

export default PaymentContainer;
