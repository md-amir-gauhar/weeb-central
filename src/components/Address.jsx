import React, { useState } from 'react'
import { useAddress } from '../context/addressContext'
import AddressModal from './AddressModal'

import '../styles/Address.css'


const Address = () => {
  const { address } = useAddress()
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className="address flex justify-between">
        <div className="address-details flex flex-col">
          <span>
            Deliver to:<span className="name">{address.name}</span>
          </span>
          <span>
            {address.street},{address.city},{address.state}-{address.pincode}
          </span>
        </div>
        <button onClick={() => setOpenModal(true)}>Change Address</button>
      </div>
      {openModal && <AddressModal setOpenModal={setOpenModal} />}
    </>

  )
}

export default Address