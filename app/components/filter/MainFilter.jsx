"use client";

import React from 'react'

export default function Page({filterValue, onFilterChange}) {

  const handleInputChange = (event) => {
    // Update filter value
    onFilterChange(event.target.value);
  };

  const categories = [
    {
      name: 'Zones',
      slug: 'zones',
    },
  ]
  const filters = [
    {
      name: 'Income',
      slug: 'income',
    },
    {
      name: 'Race',
      slug: 'race',
    },
    {
      name: 'Language',
      slug: 'language',
    },
    {
      name: 'Gender',
      slug: 'gender',
    },
  ]

  return (
    <section className='main-filter'>
      {/* <div className='main-filter-category'>
        <h2>Category</h2>
        <div>
          {categories.map((category, index) => (
            <div key={index} className='flex gap-2'>
              <input type='checkbox' id={category.slug} name={category.slug} />
              <label htmlFor={category.slug}>{category.name}</label>
            </div>
          ))}
        </div>
      </div> */}
      <div className='main-filter-filter'>
        <h2>Filters</h2>
        <div>
          {filters.map((filter, index) => (
            <div key={index} className='flex gap-2'>
              <input type='radio' id={filter.slug} name="filter" onChange={handleInputChange} checked={filterValue === filter.name}/>
              <label htmlFor={filter.slug}>{filter.name}</label>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
