import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
// import { GlobalContext } from '../../context/GlobalContext'
import { Card } from '../shared/Card';

export const Home = () => {
  // const { escorts } = useContext(GlobalContext);

  const [escorts, setEscorts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/users/escorts');
      setEscorts(data);
      console.log(data);
    }
    fetchData();
    return () => {
      //
    }
  }, [])
  return (
    <div className='container'>
      <div className="row mt-3">
        {
          escorts.map((escort) => (
            <div className="col-xs-12 col-sm-4 col-md-3" key={escort.id}>
              <Card {...escort} />
            </div>
          ))
        }
      </div>
    </div>
  )
}