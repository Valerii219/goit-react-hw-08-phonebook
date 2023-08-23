export const handeFulfiled = (state, {payload})=>{
    state.token = payload.token;
    state.user = payload
    
}

export const handlePending = (state) =>{
    state.isLoading = false;
    state.error = ''
}

export const handleFulfilled = (state) =>{
    state.isLoading = false

}

export const handleRejected = (state, {payload}) =>{
    state.isLoading = false
    state.error = payload.error
}



export const handeFulfiledLogOut = (state, actions)=>{
    state.token=''
    state.user = {name:null, email:null}
    state.isLoading = true
    state.error = ''
}
