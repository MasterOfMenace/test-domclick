import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/widget/widget.jsx';

ReactDOM.render(
    <Widget
      start={5}
      min={0}
      max={10}
      onChange={()=>{}}/>,
    document.querySelector(`#root`)
);
