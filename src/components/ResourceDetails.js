import React, {useState} from 'react'
import {selectResourceById, resourceState} from '../store/resources/selector';
import {useSelector} from 'react-redux';

export default function ResourceDetails() {
  const [chosenId, setChosenId] = useState();
  const resource = useSelector(selectResourceById(chosenId));
  const allResources = useSelector(resourceState);

  function handleChange(event) {
    setChosenId(parseInt(event.target.value));
  }

  const details = chosenId ? (
    <h2>
      Name: {resource.name} {''}
      <a href={resource.url}>Homepage</a>
    </h2>
  ) : null;

  return (
    <div>
      {details}
      <select onChange={handleChange}>
        <option defaultValue>Select A Resource</option>
        {allResources.map(resource => {
          return (
            <option value={resource.id} key={resource.id}>
              {resource.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}
