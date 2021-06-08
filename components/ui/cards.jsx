import React, { useContext } from 'react'
import { AssetContext } from 'app/context/asset-context'
import AssetActions  from 'app/actions/asset-actions'

const Card = ({data = {}}) => {

  const dispatch = useContext(AssetContext);
  const { remove: AssetRemove } = AssetActions();

  return (
    <div className="card" card-id={data.id}>
      <div className="card-head">
        <div className="card-title">{data.name}</div>
        <small className="card-type">{data.type}</small>
      </div>
      <div className="card-price">{data.price}</div>
      <button onClick={() => dispatch(AssetRemove(data.id))}>Borrar</button>
    </div>
  )
}

const Cards = ({data = []}) => {
  return data.map((item, index) => <Card key={index} data={item} />)
}

export default Cards
