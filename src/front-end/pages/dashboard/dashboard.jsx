import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {

  const userName = useSelector(state => state.auth.user)

  console.log(userName);

  return (
    <>
      <div>
        <h2>asdasddsa</h2>
      </div>
    </>
  );
};


export default Dashboard