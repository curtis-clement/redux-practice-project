import React, { useState } from "react";
import {addResource} from '../store/resources/action';
import {useDispatch} from 'react-redux';


export default function AddResourceForm() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const action = addResource(name, type, url, tags);
    //console.log(action);
    dispatch(action);
    setName('');
    setType('');
    setUrl('');
    setTags('');
  }

  return ( 
    <div>
      <h1>Add A Resource</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          required
          value={name}
          onChange={event => setName(event.target.value)} 
        />
        <label>Type</label>
        <input
          required 
          valuet={type} 
          onChange={event => setType(event.target.value)} 
        />
        <label>Url</label>
        <input 
          type='url'
          pattern='https://.*'
          value={url} 
          onChange={event => setUrl(event.target.value)} />
        <input type='submit' />
        <label>Tags</label>
        <input 
          value={tags}
          onChange={event => setTags(event.target.value)} 
        />
        <input type='submit' />
      </form>
    </div>
  );
}
