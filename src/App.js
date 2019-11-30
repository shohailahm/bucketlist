import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './containers/Todo';
import { Provider } from 'react-redux'
import store from './store';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
         <TodoContainer/>
        </Provider>
         
      </header>
    </div>
  );
}

export default App;
