import React from 'react'
import { render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  const  { container } = render(<Button>Найти</Button>)
  
  describe('common', () => {
    const component = container.querySelector('.Button')
    
    it('renders correctly', () => {
      expect(component).toHaveTextContent('Найти')
    })

    it('matches snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with extra className and disabled', () => {
  
    const component = container.querySelector('.Button', '.Button_disabled')

    it('renders correctly', () => {
      expect(component).toHaveTextContent('Найти')
    })

    it('matches snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

})