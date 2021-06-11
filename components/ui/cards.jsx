import React, { useContext } from 'react'
import { AssetContext } from 'app/context/asset-context'
import AssetActions from 'app/actions/asset-actions'

import { IconTrash, IconLocation, IconHome } from 'components/shared/svgs'

const Card = ({ data = {} }) => {

  const dispatch = useContext(AssetContext);
  const { remove: AssetRemove } = AssetActions();

  return (
    <div className="card" card-id={data.id}>
      <div className="card-media">
        <img src="https://images.unsplash.com/photo-1621245177006-8b6e120cf62f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixlib=rb-1.2.1&q=80&w=1280" alt="" />
      </div>
      <div className="card-body">
        <div className="card-head">
          <div className="card-title">{data.name}</div>
          <small className="card-type">{data.type}</small>
        </div>
        <div className="card-info">
          <i className="icon"><IconHome /></i>
          <span> {data.size} M<sup>2</sup></span>
          &nbsp;/&nbsp;
          <span> Habitaciones: {data.rooms} </span>
        </div>
        <address>
          <span className="icon"><IconLocation /></span>
          <span>{data.address}</span>
        </address>
        <div className="card-price">$ {data.price}</div>
      </div>
      <div className="card-actions">
        <span className="icon" onClick={() => dispatch(AssetRemove(data.id))}><IconTrash /></span>
      </div>
    </div>
  )
}

const Cards = ({ data = [] }) => {
  return (
    <div className="cards">
      { data.map((item, index) => <Card key={index} data={item} />)}
    </div>
  )
}

export default Cards
