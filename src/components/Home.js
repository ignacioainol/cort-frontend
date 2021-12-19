import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Card } from './shared/Card';

export const Home = () => {
    const { escorts } = useContext(GlobalContext);
    return (
        <div className='container'>
            <div className="row mt-3">
                {
                    escorts.map((escort) => (
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <Card {...escort} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


{/* <div class="container">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div> */}