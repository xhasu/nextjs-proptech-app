import React, { useEffect, useReducer } from 'react'
import { AssetContext } from 'app/context/asset-context'
import AssetActions  from 'app/actions/asset-actions'
import AssetReducer from 'app/reducers/asset-reducer'

import Cards from 'components/ui/cards' 

const Dashboard = () => {

  const [state, dispatch] = useReducer(AssetReducer, []);

  const { add: AddAsset, reset: AssetReset } = AssetActions();

  useEffect(() => {
    const raw = localStorage.getItem('AssetsData');
    const data = raw ? JSON.parse(raw) : [];
    dispatch(AssetReset(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('AssetsData', JSON.stringify(state));
  }, [state]);

  return (
    <AssetContext.Provider value={dispatch}>
      <section className="dashboard">
        <div className="dashboard-box">
          <div className="dashboard-content">
            <h2 className="dashboard-title">Inmuebles</h2>
            <button onClick={() => dispatch(AddAsset())}>Agregar</button>
            <small>
              <pre>{ JSON.stringify(state, null, 2) }</pre>
            </small>
          </div>
          <div className="dashboard-aside">
            <div className="aside-wrap">
              <Cards data={state} />
            </div>
          </div>
        </div>
      </section>
    </AssetContext.Provider>
  )
}

export default Dashboard
