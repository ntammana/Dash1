import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Header from './Header'

describe('<Header />', () => {
   let wrapper
   beforeEach(() => {
	wrapper = shallow(<Header />)
   });

   it('', () => {
	expect(wrapper.find('').first().text())
	   .to.equal('')
   });
})
