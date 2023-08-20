export const handeFulfiled = (state, {payload})=>{
    state.token = payload.token;
    state.profile = payload.user
}

export const handlePending = (state) =>{
    state.isLoading = true;
    state.error = ''
}

export const handleFulfilled = (state) =>{
    state.isLoading = false

}
export const handleRejected = (state, {payload}) =>{
    state.isLoading = false
    state.error = payload.error
}



export const handeFulfiledLogOut = (state, {payload})=>{
    state.token=''
    state.profile = null
    state.isLoading = false
    state.error = ''
}
