import React from 'react';
import renderer from 'react-test-renderer';
import Widget from './widget.jsx';

const mock = {
  max: 10,
  min: 0,
  start: 2
};

it(`Widget component render correctly`, () => {
  const tree = renderer
    .create(
        <Widget
          start={mock.start}
          max={mock.max}
          min={mock.min}
          onChange={()=>{}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
