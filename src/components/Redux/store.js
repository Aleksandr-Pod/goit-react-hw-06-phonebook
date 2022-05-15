import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action) { state.items.push(action.payload) },
        removeContact(state, action) { state.items = state.items.filter(el => el.id !== action.payload) },
        changeFilter(state, action) {state.filter = action.payload}
    }
})
export const { addContact, removeContact, changeFilter } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
}
// const rootReducer = combineReducers({
//     contacts: contactsSlice.reducer
// })
const persistedReduser = persistReducer(persistConfig, contactsSlice.reducer);

const store = configureStore({
    reducer: { contacts: persistedReduser },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});
const persistor = persistStore(store);
export { store, persistor };
