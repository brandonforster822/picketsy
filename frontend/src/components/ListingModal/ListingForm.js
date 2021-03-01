import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as listingActions from '../../store/listing'


function ListingForm({modalClose}){
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const [name, setName] = useState("")
    const userId = sessionUser.id
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState(null)
    const [price, setPrice] = useState("")
    const [errors, setErrors] = useState([])



    const handleSubmit = (e) => {
        e.preventDefault()
        return dispatch(listingActions.createListing({name, userId, description, image, category, price}))
    }

    const updateFile = (e) => {
        const file = e.target.files[0]
        if (file) setImage(file)
    }

    return (
        <div>
            <div>
                <h2>Create Listing</h2>
            </div>
            <form onSubmit={(e) => handleSubmit(e) && modalClose()}>
                <div>
                    <label>
                        Name
                    </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                    required/>
                </div>
                <div>
                    <label>
                        Description
                    </label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                </div>
                <div>
                    <label>
                        Category
                    </label>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value='Jewelry'>Jewelry</option>
                        <option value='Home Decor'>Home Decor</option>
                        <option value='Clothing'>Clothing</option>
                        <option value='Craft Supplies'>Craft Supplies</option>
                        <option value='Wall Art'>Wall Art</option>
                        <option value='Entertainment'>Entertainment</option>
                    </select>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required/>
                </div>
                <div>
                    <input type='file' onChange={updateFile} />
                </div>
                <div>
                    <button type='submit'>Create ur listing</button>
                </div>
            </form>
        </div>
    )
}

export default ListingForm