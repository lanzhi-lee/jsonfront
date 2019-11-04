import React, { useEffect, useReducer } from 'react';

import { Editor, Header, SideBar } from './containers'
import { ActionCreaters, Context, DefaultData, Reducers } from './hooks'
import './App.scss';

const App: React.FC = () => {
  const [data, dispatch] = useReducer(Reducers, DefaultData)

  const actions = {

  }

  useEffect(() => {
    // do init here
    console.log('initÎ')
  }, [])

  return (
    <Context.Provider value={{ data, actions }}>
      <section className="App">
        <Editor />
        <Header />
        <SideBar />
      </section>
    </Context.Provider>
  );
}

export default App;
