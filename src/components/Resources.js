import React from 'react'
import {useSelector} from 'react-redux';
import {resourceState} from '../store/resources/selector';
import {deleteResource} from '../store/resources/action';
import {useDispatch} from 'react-redux';

export default function Resources() {
  const allResources = useSelector(resourceState);
  const dispatch = useDispatch();
  //console.log(howManyResources.length)


  function handleDelete(resourceId) {
    const sure = window.confirm('Are you sure you want to remove this?');

    if (!sure) {
      return;
    }
    // The two lines of code above make an warning window to confirm removing the resource

    const action = deleteResource(resourceId);
    dispatch(action);
  }

  return (
    <div>
      <h1>We currently show:</h1>
      <h2>{allResources.length} resources</h2>
      <ul>
        {allResources.map(resource => {
          return (
            <li>
              Name: {resource.name}, Type: {resource.type}, <a href={resource.url}>View Page Here</a>
              <button onClick={() => handleDelete(resource.id)}>Remove</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
