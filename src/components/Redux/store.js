import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//              если использовать {createAction, createReducer}
// const contacts = {
//     items: [],
//     filter: ''
// }
// const addContact = createAction('addContact');
// const removeContact = createAction('removeContact');

// const reducer = createReducer(contacts, {
//     [addContact]: (state, action) => state.unshift(action.payload),
//     [removeContact]: (state, action) => state.filter(el => el.id !== action.payload)
// })


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
    reducers: {
        addContact(state, action) { return [action.payload, ...state] },
        removeContact(state, action) {return state.filter(el => el.id !== action.payload)},
    }
})
export const { addContact, removeContact } = contactsSlice.actions;

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        changeFilter(state, action) {return action.payload}
    }
})
export const { changeFilter } = filterSlice.actions;


const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer
})
const persistedReduser = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReduser,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});
const persistor = persistStore(store);
export { store, persistor };
