"use client";
import { useState } from 'react';
import QuestionNav from '@/app/components/QuestionNav';
import MainFilter from '@/app/components/filter/MainFilter';
import SearchBar from '@/app/components/SearchBar';


export default function Layout({ children }) {
  // State to hold filter value
  const [filterValue, setFilterValue] = useState('');

  // Function to update filter value
  const handleFilterChange = (newValue) => {
    setFilterValue(newValue);

  };

  return (

    <>
      {/* SearchBar */}
      <SearchBar className="topbarSearch" />
      <main className='main-class'>
        {/* QuestionNav is a sidebar */}
        <QuestionNav/>
        <div>{children}</div>
        {/* Pass filter value and handler function as props */}
        <MainFilter filterValue={filterValue} onFilterChange={handleFilterChange} />
      </main>
    </>
  );
}
