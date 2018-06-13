import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import 'jest-enzyme';
import { Navbar,Grid } from 'react-bootstrap';


it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const welcome = <Navbar inverse fixedTop>
  <Grid>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">React App</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Grid>
</Navbar>;
  // expect(wrapper.contains(welcome)).to.equal(true);
 // expect(wrapper.contains(welcome)).toEqual(true);
  expect(wrapper).toContainReact(welcome);
});
