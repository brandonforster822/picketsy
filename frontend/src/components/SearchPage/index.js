import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams, useHistory} from 'react-router-dom'
import * as listingActions from '../../store/listing'



function SearchPage(){
    const dispatch = useDispatch()
    const history = useHistory()
    const searchId = useParams()
    const search = searchId.id
    const searchListings = useSelector(state => state.listing)
    const [listings, setListings] = useState('')



    
    useEffect(() => {
        dispatch(listingActions.getSearchListings(search))
    }, [search])
    

    useEffect(() => {
        console.log(searchListings)
        if (searchListings.listing === null) {
            return(
                <div>
                </div>
            )           
        }
        else if (!Array.isArray(searchListings)) {
            return(
                <div>
                </div>
            )
        }
        else {
            console.log('success')
            setListings(
                <div className='content-container'>
                {searchListings.map((listing) => {
                    return(
                        <div key={listing.id} className={`listing-container`}>
                            <div className='item-name'>
                                <h4 onClick={() => history.push(`/listing/${listing.id}`)}>{listing.name}</h4>
                                <img src={listing.imgLink}/>
                            </div>
                            <div className='item-description'>
                                <h4>Description:</h4>
                                <p>{listing.description}</p>
                            </div>
                            <div className='item-price'>
                                <h4>Price:</h4>
                                <p>{listing.price}</p>
                            </div>
                        </div>
                )
            }
        )}
        </div>
            )
        }
    }, [searchListings])


    return(
        <div>
            {listings}
        </div>
    )
}


export default SearchPage