// React
import React from 'react';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../Redux/Reducers/rootReducer';
import thunk from 'redux-thunk';

// Components
import Main from './Main/Main';

// Create redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
