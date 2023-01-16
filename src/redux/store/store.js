import {configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from 'redux-persist'
import thunk from 'redux-thunk';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EventReducer } from "../reducers/EventReducer";

const eventPersist={
    key:'auth',
    storage: AsyncStorage,
}
export const store = configureStore({reducer:persistReducer(eventPersist, EventReducer), middleware:[thunk]})
export const persistor= persistStore(store);
