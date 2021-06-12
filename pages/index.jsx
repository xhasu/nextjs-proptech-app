import React, { useEffect, useReducer } from 'react'
import { AssetContext } from 'app/context/asset-context'
import AssetActions  from 'app/actions/asset-actions'
import AssetReducer from 'app/reducers/asset-reducer'

import Cards from 'components/ui/cards' 
import CreateAsset from 'components/forms/create-asset'

const Dashboard = () => {

  const [state, dispatch] = useReducer(AssetReducer, []);

  const { reset: AssetReset } = AssetActions();

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
      <div className="dashboard">
        <div className="dashboard-hero">
          <section className="section">
            <div className="dashboard-head">
              <h2 className="dashboard-title">Inmuebles</h2>
              <div className="dashboard-subtitle">
                <p>Agregar una propiedad</p>
              </div>
            </div>
            <div className="dashboard-form">
              <CreateAsset />
            </div>
          </section>
        </div>
        <div className="dashboard-content">
          <section className="section">
            <Cards data={state} />
            <small>
              <pre>{ JSON.stringify(state, null, 2) }</pre>
            </small>
          </section>
        </div>
      </div>
    </AssetContext.Provider>
  )
}

export default Dashboard
