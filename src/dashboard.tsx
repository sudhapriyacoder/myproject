import React from 'react';
import logo from './logo.svg';
import './App.css';

function Dashboard() {

    let data = [
    {
        id: 1,
        name: 'Javascript'
    },
    {
        id: 2,
        name: 'Finance'
    },
    {
        id:3,
        name: 'Plan my trip'
    },
    {
        id: 1,
        name: 'Cooking'
    },
    {
        id: 2,
        name: 'Fashion'
    },
    {
        id:3,
        name: 'Friendship'
    }]
  return (
    <div className="container">
     {data.map(data => <>
        <div className='tile'>
            <div>
                {data.name}
            </div>
        </div>
        </>)}
    </div>
  );
}

export default Dashboard;
