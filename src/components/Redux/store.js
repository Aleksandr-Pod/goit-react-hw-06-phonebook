import { configureStore} from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';

const persistConfig = { key:'contacts', storage };

const persistedReduсer = persistReducer(persistConfig, contactsReducer);
// const myMiddleware = store => next => action => {
//     console.log('это мой мидлвар');
// } 
const store = configureStore({
    reducer: { contacts: persistedReduсer },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
        serializableCheck: { ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] }
    }),
    // myMiddleware
});
const persistor = persistStore(store);
export { store, persistor };
