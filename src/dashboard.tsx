import React from 'react';
import logo from './logo.svg';
import { Outlet, Link } from "react-router-dom";
import './App.css';
import Header from './Header';

function Dashboard() {

    let data = [
    {
        id: 1,
        name: 'Javascript',
        route: 'javascript'
    },
    {
        id: 2,
        name: 'Finance',
        route: 'finance'
    },
    {
        id:3,
        name: 'Plan my trip',
        route: 'planmytrip'
    },
    {
        id: 1,
        name: 'Cooking',
        route: 'cooking'
    },
    {
        id: 2,
        name: 'Fashion',
        route: 'fashion'
    },
    {
        id:3,
        name: 'Friendship',
        route: 'friendship'
    }]
  return (<>
   <Header />
   <div className="container">
     {data.map(data => <>
        <div className='tile'>
            <div>
            <Link to={`/${data.route}`}>{data.name}</Link>
            </div>
        </div>
        <Outlet />
        </>)}
    </div>
  </>
    
  );
}

export default Dashboard;
