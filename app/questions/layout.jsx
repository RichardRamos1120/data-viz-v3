import QuestionNav from '@/app/components/QuestionNav';
import MainFilter from '@/app/components/filter/MainFilter';
import SearchBar from '@/app/components/SearchBar';


export default function Layout({ children }) {

  return (

    <>
      {/* SearchBar */}
      <SearchBar className="topbarSearch" />
      <main className='main-class'>
        {/* QuestionNav is a sidebar */}
        <QuestionNav/>
        <div>{children}</div>
        {/* Pass filter value and handler function as props */}
        <MainFilter />
      </main>
    </>
  );
}
