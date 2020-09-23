import React from 'react';
import renderer from 'react-test-renderer';
import Viget from './viget.jsx';

const mock = {
  max: 10,
  min: 0,
  start: 2
};

it(`Viget component render correctly`, () => {
  const tree = renderer
    .create(
        <Viget
          start={mock.start}
          max={mock.max}
          min={mock.min}
          onChange={()=>{}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
