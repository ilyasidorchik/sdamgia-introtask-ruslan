import React from 'react'
import { cn } from '@bem-react/classname'

import { useHelpers } from './hooks'
import './Search.scss'
import Result from './Result/Result'
import Button from '../Button/Button'

const Search = () => {
  const cnSearch = cn('Search')
  const { value, handleChange, handleSubmit } = useHelpers()

  console.log(value === '' ? false : true)
  return (
    <div className={cnSearch()}>
      <form className={cnSearch('Form')} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Предмет'
          value={value}
          onChange={handleChange}
          className={cnSearch('Input')}
        />
        <Button disabled={!value}>Найти</Button>
      </form >
      <Result />
    </div >
  )
}

export default Search
