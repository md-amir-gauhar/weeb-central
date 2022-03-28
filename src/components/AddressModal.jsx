import React, { useState } from 'react'
import { useAddress } from '../context/addressContext'
import '../styles/AddressModal.css'

const AddressModal = ({ setOpenModal }) => {
  const { dispatch } = useAddress()
  const [editName, setEditName] = useState("")
  const [editContact, setEditContact] = useState("")
  const [editStreet, setEditStreet] = useState("")
  const [editCity, setEditCity] = useState("")
  const [editState, setEditState] = useState("")
  const [editPincode, setEditPincode] = useState("")

  const submitHandler = e => {
    e.preventDefault()
    const address = {
      name: editName,
      contact: editContact,
      street: editStreet,
      city: editCity,
      state: editState,
      pincode: editPincode
    }

    dispatch({
      type: "CHANGE_ADDRESS",
      payload: address
    })
    setOpenModal(false)
  }
  return (
    <div className='modal-container flex align-center justify-center'>
      <div className="modal flex flex-col">
        <form className='flex flex-col' onSubmit={submitHandler}>
          <input
            type="text"
            placeholder='Name'
            value={editName}
            onChange={e => setEditName(e.target.value)}
          />
          <input
            type="number"
            placeholder='Contact No.'
            value={editContact}
            onChange={e => setEditContact(e.target.value)}
          />
          <input
            type="text"
            placeholder='Street'
            value={editStreet}
            onChange={e => setEditStreet(e.target.value)}
          />
          <input
            type="text"
            placeholder='City'
            value={editCity}
            onChange={e => setEditCity(e.target.value)}
          />
          <input
            type="text"
            placeholder='State'
            value={editState}
            onChange={e => setEditState(e.target.value)}
          />
          <input
            type="number"
            placeholder='Pincode'
            value={editPincode}
            onChange={e => setEditPincode(e.target.value)}
          />
        </form>
        <div className="buttons flex align-center justify-between">
          <button onClick={() => setOpenModal(false)}>Cancel</button>
          <button type='submit' onClick={submitHandler}>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default AddressModal