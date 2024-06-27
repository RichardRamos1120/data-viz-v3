"use client"

import React from 'react';
import { useRouter, usePathname } from 'next/navigation'; 
import { useState, useEffect } from 'react'; // Import useEffect

export default function Page() {
  const [currentFilter, setCurrentFilter] = useState('zones'); // Initialize state for current filter value with 'zones'
  const router = useRouter(); 
  const pathname = usePathname(); 

  const handleInputChange = (event, slug) => {    
    // Update filter value
    const filterValue = slug;
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('filter', filterValue);
    const path = `${pathname}?${queryParams.toString()}`;
    router.push(path); // Update URL with selected filter slug

    setCurrentFilter(filterValue); // Update state with selected filter slug
  };

  const filters = [
    {
      name: 'None',
      slug: 'none',
    },
    {
      name: 'Age',
      slug: 'age',
    },
    {
      name: 'Income',
      slug: 'income',
    },
    {
      name: 'Ethnicity',
      slug: 'ethnicity',
    },
  ];

  useEffect(() => { 
    // Initialize currentFilter state with the filter value from the URL query params
    const queryParams = new URLSearchParams(window.location.search);
    const filterParam = queryParams.get('filter');
    if (filterParam && filters.some(filter => filter.slug === filterParam)) {
      setCurrentFilter(filterParam);
    }

    return setCurrentFilter('none'); // Reset currentFilter state to 'zones' when component unmounts
  }, [pathname]);

  return (
    <section className='main-filter'>
      <div className='main-filter-filter'>
        <h2>Categories</h2>
        <div>
          {filters.map((filter, index) => (
            <div key={index} className='flex gap-2'>
              <input
                type='radio'
                id={filter.slug}
                name='filter'
                onChange={(event) => handleInputChange(event, filter.slug)} 
                checked={currentFilter === filter.slug}
              />
              <label htmlFor={filter.slug}>{filter.name}</label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
