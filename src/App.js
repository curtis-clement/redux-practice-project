import React from 'react';
import './App.css';
import Developers from './components/Developers';
import Resources from './components/Resources';
import ResourceDetails from './components/ResourceDetails';
import AddResourceForm from './components/AddResourceForm';

function App() {
  return (
    <div className="App">
      <h1>
        Web Dev Page
      </h1>
        <Developers />
        <ResourceDetails />
        <br/>
        <AddResourceForm />
        {/* <Resources /> */}
    </div>

  );
}

export default App;
