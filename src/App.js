import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

/*

This example shows a list of all people.

Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously, you can determine whether a person is a chemist by checking if person.profession === 'chemist'.
*/

export default function List() {
  const chemists = people.filter((person) => {
    return person.profession === "chemist";
  });

  const chemlist = chemists.map((person) => {
    return (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    );
  });

  const otherSci = people.filter((person) => {
    return person.profession !== "chemist";
  });

  const otherList = otherSci.map((person) => {
    return (
      <>
        <li key={person.id}>
          <img src={getImageUrl(person)} alt={person.name} />
          <p>
            <b>{person.name}: </b>
            {" " + person.profession + " "}
            known for {person.accomplishment}
          </p>
        </li>
      </>
    );
  });

  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <>
      <article>
        <h1>Scientists</h1>
        <ul>{otherList}</ul>
      </article>
      <article>
        <h1> Chemists </h1>
        <ul>{chemlist}</ul>
      </article>
    </>
  );
}
