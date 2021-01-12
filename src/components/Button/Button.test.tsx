import React from 'react'
import { render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  const  { container } = render(<Button>Найти</Button>)
  const component = container.querySelector('.Button')

  it('render correctly', () => {
    expect(component).toHaveTextContent('Найти')
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})