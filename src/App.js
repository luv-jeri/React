import React, { useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

export default function App() {
  const [state, setState] = useState(null);
  const getData = async () => {
    const { data } = await axios.get('http://localhost:5000');
    console.log('data', data);

    let names = [];
    let $ = cheerio.load(data);

    // find what element ids, classes, or tags you want from opening console in the browser
    // cheerio library lets you select elements similar to querySelector
    $('#content').each(function (i, element) {
      console.log(i , element);
      // let name = $(names).prepend().text();
      // names.push(name);
    });

    setState({ names });
  };
  console.log(state)

  return (
    <div>
      <button onClick={getData}>GET DATA</button>
    </div>
  );
}



