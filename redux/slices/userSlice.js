import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:false,
  userLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   setUser: (state, action) =>{
    console.log('pppppppppp', action.payload) 

    state.user = action.payload
   },
   setUserLoading: (state, action) =>{
    state.userLoading = action.payload
   }
  },
})

// Action creators are generated for each case reducer function
export const {setUser, setUserLoading} = userSlice.actions

export default userSlice.reducer