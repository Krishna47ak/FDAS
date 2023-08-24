import { useEffect } from "react";
import './App.css';

import Home from './screens/Home';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { fetchData } from "./store/actions/fdas";

function App() {
  useEffect(() => {
    store.dispatch(fetchData())
  }, [])
  
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>);
}

export default App;
