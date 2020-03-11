import React from 'react'
import {useSelector} from 'react-redux';
import {resourceState} from '../store/resources/selector'

export default function Resources() {
  const allResources = useSelector(resourceState);
  //console.log(howManyResources.length)

  return (
    <div>
      <h1>We currently show:</h1>
      <h2>{allResources.length} resources</h2>
      <ul>
        {allResources.map(resource => {
          return (
            <li>
              Name: {resource.name}, Type: {resource.type}, <a href={resource.url}>View Page Here</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
