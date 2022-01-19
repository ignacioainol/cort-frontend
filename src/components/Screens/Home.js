import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listEscorts } from '../../actions/escortActions';
import { Card } from '../shared/Card';
import { Loading } from '../shared/Loading';

export const Home = () => {

  const escortList = useSelector(state => state.escortList);
  const { escorts, loading, error } = escortList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listEscorts());
  }, [])
  return (
    <div className='container'>

      {loading ? <Loading /> : error ? <div>{error}</div> :
        <div className="row mt-3">
          {
            escorts.map((escort) => (
              <div className="col-xs-12 col-sm-4 col-md-3" key={escort.user_id}>
                <Card {...escort} />
              </div>
            ))
          }
        </div>
      }

    </div>
  )
}