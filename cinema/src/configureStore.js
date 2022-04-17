import { configureStore } from '@reduxjs/toolkit'
import filmReducer from './reducers/filmSlice'
import scheduleReducer from './reducers/scheduleSlice'
import commentReducer from './reducers/commentSlice'

export default configureStore({
    reducer: {
        film: filmReducer,
        schedule: scheduleReducer,
        comment: commentReducer
    },
    //middleware: []
})