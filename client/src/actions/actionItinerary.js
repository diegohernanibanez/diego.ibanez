


const getItineraries = ( id ) => async dispatch =>{
    await fetch(`http://localhost:5000/itinerary/${id}`).then(resp => resp.json()).then((data)=>{
        dispatch({ type: 'GET_ITINERARIES', payload: data})
    }).catch((err)=>console.log(err))
    
}

export default getItineraries;