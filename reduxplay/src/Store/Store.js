import { configureStore } from '@reduxjs/toolkit'
import  todoslicereducer  from '../Features/TodoSlice'

export const store =configureStore({
    reducer:{
      todo:todoslicereducer
    }
})