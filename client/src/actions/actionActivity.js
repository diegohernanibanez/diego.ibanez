const getActivities = ( id ) => async dispatch =>{
    
    await fetch(`http://localhost:5000/activities/${id}`).then(resp => resp.json()).then((data)=>{
        dispatch({ type: 'GET_ACTIVITIES', payload: data})
        
    }).catch((err)=>console.log(err))
    
}

export default getActivities;