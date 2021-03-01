import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import ListingForm from './ListingForm'

function ListingModal() {
    const [showModal, setShowModal] = useState(false)

    return(
        <>
            <li className='create-listing-button' onClick={() => setShowModal(true)}>Create Listing</li>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ListingForm modalClose={() => setShowModal(false)}/>
              </Modal>
            )}
        </>
    )
}

export default ListingModal