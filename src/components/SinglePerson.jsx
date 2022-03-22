import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SinglePerson = () => {
  const [person, setPerson] = useState({});
  const { personid } = useParams();

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, [personid]);

  return (
    <div id="single-p"  key={person.id}>
      <div class="card">
        <div class="card-body card-size">
          <h5 class="card-title">{person.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{person.gender}</h6>
          <h6 class="card-subtitle mb-2 text-muted">
            Hair Color: {person.hair_color}
          </h6>
          <h6 class="card-subtitle mb-2 text-muted">
            Eye Color: {person.eye_color}
          </h6>
          <p class="card-text">age: {person.age}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePerson;
