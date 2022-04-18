import { configureStore } from '@reduxjs/toolkit'
import filmReducer from './reducers/filmSlice'
import scheduleReducer from './reducers/scheduleSlice'
import commentReducer from './reducers/commentSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer: {
        film: filmReducer,
        schedule: scheduleReducer,
        comment: commentReducer,
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)