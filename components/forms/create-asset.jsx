
import React, { useState, useContext } from 'react'
import { AssetContext } from 'app/context/asset-context'
import AssetActions from 'app/actions/asset-actions'

const CreateAsset = () => {

  const dispatch = useContext(AssetContext);
  const { add: AddAsset } = AssetActions();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [rooms, setRooms] = useState("");
  const [size, setSize] = useState("");

  const mockAsset = {
    id: (+new Date()),
    name: name,
    type: "Casa",
    size: size,
    rooms: rooms,
    price: price,
    address: address,
  }

  const resetForm = () => {
    setName("");
    setPrice("");
    setAddress("");
    setRooms("");
    setSize("");
  }

  const handleCreateAsset = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(AddAsset(mockAsset));
    resetForm();
  }

  return (
    <form className="form form-dashboard needs-validation" onSubmit={handleCreateAsset} noValidate>
      <div className="control">
        <label>Nombre de la propiedad</label>
        <input type="text" name="name" id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Nombre" />
      </div>
      <div className="control">
        <label>Precio de la propiedad</label>
        <input type="number" name="price" id="price" value={price} onChange={(event) => setPrice(event.target.value)} placeholder="Precio" />
      </div>
      <div className="control">
        <label>Dirección de la propiedad</label>
        <input type="text" name="address" id="address" value={address} onChange={(event) => setAddress(event.target.value)} placeholder="Dirección" />
      </div>
      <div className="control">
        <label>Número de cuartos</label>
        <input type="number" name="rooms" id="rooms" value={rooms} onChange={(event) => setRooms(event.target.value)} placeholder="1" min={1} />
      </div>
      <div className="control">
        <label>Metros de la propiedad <sub>M<sup>2</sup></sub> </label>
        <input type="number" name="size" id="size" value={size} onChange={(event) => setSize(event.target.value)} placeholder="Metros" min={1} />
      </div>
      <div className="control">
        <button type="submit" className="btn btn-primary">Guardar</button>
      </div>
    </form>
  )
}

export default CreateAsset
