//Section2 3rd part
// Q3: At times, when we access a JavaScript object, we receive raw JSON string and we
// need to convert it to an object ourselves to use it in our program. Similarly, we also
// may require an object in JSON string form. Write a program that parses JSON
// string in ‘member’ array from following link to an object and display its contents.
// You are also required to stringify the last object in ‘member’ array.
// https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json


import React from "react";

function JsonProblem() {
  React.useEffect(() => {
    fetch(
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
    )
      .then((res) => res.json())
      .then((data) => console.log(JSON.stringify(data.members[2].powers)));
  });
  const result = () => {
    fetch(
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
    )
      .then((res) => res.json())
      .then((data) => console.log(JSON.parse(JSON.stringify(data.members))));
  };
  return (
    <>
      <h1>JSON Solution </h1>
      <button onClick={result}>Parse Data</button>
    </>
  );
}

export default JsonProblem;