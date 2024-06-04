"use client"

import { useState } from 'react';
import QuestionNav from '@/app/components/QuestionNav';
import MainFilter from '@/app/components/filter/MainFilter';

export default function Layout({ children }) {
  // State to hold filter value
  const [filterValue, setFilterValue] = useState('');

  // Function to update filter value
  const handleFilterChange = (newValue) => {
    setFilterValue(newValue);
  };

  return (
    <main className='main-class'>
      <QuestionNav />
      <div className='mt-10'>{children}</div>
      {/* Pass filter value and handler function as props */}
      <MainFilter filterValue={filterValue} onFilterChange={handleFilterChange} />
    </main>
  );
}
