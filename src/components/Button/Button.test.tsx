import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import Button from './Button'

let container = null

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
    const  { container } = render(<Button className={this.className}>Найти</Button>)
  
    const component = container.querySelector('.Button.Button_disabled')

    it('renders correctly', () => {
      expect(component).toHaveTextContent('Найти')
    })

  })

})

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
    const  { container } = render(<Button className={this.className}>Найти</Button>)
  
    const component = container.querySelector('.Button.Button_disabled')

    it('renders correctly', () => {
      expect(component).toHaveTextContent('Найти')
    })

  })

})