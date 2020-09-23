import React from 'react';
import ReactDOM from 'react-dom';
import Viget from './components/viget/viget.jsx';

ReactDOM.render(
    <Viget
      start={5}
      min={0}
      max={10}
      onChange={()=>{}}/>,
    document.querySelector(`#root`)
);
