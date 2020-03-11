import React from "react";
import {useSelector} from "react-redux";
import {developerState} from "../store/developers/selector";

export default function Developers() {
  const developerInfo = useSelector(developerState);
  // console.log(howManyDevelopers.length);

  // To display the <ul> info in a nicer way make a separate component for
  // this info and pass it the props
  return (
    <div>
      <h1>We currently employ {developerInfo.length} developers</h1>
      <ul>
        {developerInfo.map(developer => {
          return (
            <li>
              Name: {developer.name}, <a href={developer.website}>Website</a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
