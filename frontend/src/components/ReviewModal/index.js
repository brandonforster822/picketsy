import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import ReviewForm from './ReviewForm'

function ReviewModal() {
    const [showModal, setShowModal] = useState(false)

    return(
        <>
            <button className='create-review-button' onClick={() => setShowModal(true)}>Leave Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewForm modalClose={() => setShowModal(false)}/>
                </Modal>
            )}
        </>
    )
}

export default ReviewModal