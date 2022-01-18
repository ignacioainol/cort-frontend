import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { API_REST } from '../../constants/base_uri';
// import { GlobalContext } from '../../context/GlobalContext'
import { Card } from '../shared/Card';
import { Loading } from '../shared/Loading';

export const Home = () => {
  // const { escorts } = useContext(GlobalContext);

  const [escorts, setEscorts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${API_REST}users/escorts`);
      setEscorts(data);
      setloading(false);
    }
    fetchData();
    return () => {
      //
    }
  }, [])
  return (
    <div className='container'>

      {loading &&
        <Loading />
      }

      <div className="row mt-3">
        {
          escorts.map((escort) => (
            <div className="col-xs-12 col-sm-4 col-md-3" key={escort.user_id}>
              <Card {...escort} />
            </div>
          ))
        }
      </div>
    </div>
  )
}