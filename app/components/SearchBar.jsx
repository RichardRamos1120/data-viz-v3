"use client";


import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import './SearchStyle.css';
import Image from 'next/image';



const query = [
    {text: "Q3 How concerned are you about the risk of wildfires to your household? Scale of 1 to 5", link: "/questions/Q3"},
    {text: "Q14 Which of the following sources do you use the most to get information about preparing for future wildfires?", link: "/questions/Q14"},
    {text: "Q15 Which of the following would you most likely do to better prepare for wildfires?", link: "/questions/Q15"},
    {text: "Q12 How concerned are you about getting or keeping wildfire insurance? Scale of 1 to 5", link: "/questions/12"},
    // {text: "Q13 Do you have a concern not previously listed about wildfire risk to your household?", link: "/questions/Q13"},

    { text: "Q4 How concerned are you about traffic preventing you from leaving your neighborhood during an evacuation? ○ Scale of 1 to 5", link: "/questions/Q4" },
    { text: "Q5 How concerned are you about getting out of your home quickly enough during an evacuation? ○ Scale of 1 to 5", link: "/questions/Q5" },
    { text: "Q9 How concerned are you about finding out about a wildfire in time to evacuate safely? ○ Scale of 1 to 5", link: "/questions/Q9" },
    { text: "Q10 How concerned are you about finding out about a wildfire in time to evacuate safely? ○ Scale of 1 to 5", link: "/questions/Q10" },
    { text: "Q11 Do you know where to find trustworthy information when there is a nearby wildfire? ○ Yes or no", link: "/questions/Q11" },
    { text: "Q16 Which of the following methods would you prefer to get information about an active wildfire emergency? ○ Choose multiple answers from a list", link: "/questions/Q16" },
    { text: "Q17 Which of the following sources do you trust the most for information about an active wildfire emergency that might affect your neighborhood? ○ Choose multiple answers from a list", link: "/questions/Q17" },
    { text: "Q18 Are you signed up for any emergency alerting system?○ Yes, no or I don’t know", link: "/questions/Q18" },
    { text: "Q19 Which emergency alerting system are you signed up for?", link: "/questions/Q19" },
    { text: "Q20 Have you received emergency alerts before?", link: "/questions/Q20" },
    { text: "Q21 Were you able to understand the alerts you received?", link: "/questions/Q21" },
    { text: "Q22 Why were you not able to understand the alerts?", link: "/questions/Q22" },
    { text: "Q23 What is your preferred language for receiving emergency alerts?", link: "/questions/Q23" },
    { text: "Q24 What is the most difficult part of receiving and understanding emergency communications?", link: "/questions/Q24" },
    { text: "Q32 How have you prepared for a potential evacuation?", link: "/questions/Q32" },
    { text: "Q33 Where would be the closest safe place to go during an evacuation?", link: "/questions/Q33" },
    { text: "Q34 Which of the following would prevent you from following an evacuation order?", link: "/questions/Q34" },
    { text: "Q35 What are suggested practices during red flag warnings?", link: "/questions/Q35" },
    { text: "Q7 Do you believe the vegetation in the public open space near you is a fire risk?○ Yes, no or I don’t know", link: "/questions/Q7" },
    { text: "Q36 Have there been any projects to remove or manage vegetation to reduce fire risk in the open spaces near your home?", link: "/questions/Q36" },
    { text: "Q38 How would you rate the performance of the entities responsible for removing vegetation to reduce fire risks?", link: "/questions/Q38" },
    { text: "Q29 Is there public financial assistance to help you reduce fire hazards on the exterior of your residence and in the surrounding yard?", link: "/questions/Q29" },
    { text: "Q6 Do you believe the vegetation in your yard or landscaping on your property is a fire risk? ○ Yes, no or I don’t know", link: "/questions/Q6" },
    { text: "Q8 Do you believe the vegetation in your neighborhood is a fire risk? ○ Yes, no or I don’t know", link: "/questions/Q8" },
    { text: "Q25 What do you know about defensible space evaluations run by fire agencies in Marin?", link: "/questions/Q25" },
    { text: "Q27 Are you responsible for maintaining the exterior of the building you live in?", link: "/questions/Q27" },
    { text: "Q28 Are you responsible for maintaining the yard/land around the building you live in?", link: "/questions/Q28" },
    { text: "Q30 Besides cost, what is the most difficult thing about reducing fire hazards on the exterior of your residence and in the surrounding yard?", link: "/questions/Q30" },
    { text: "Q31 How much would you be able and willing to spend once to reduce fire risks of the exterior of your residence and the surrounding yard?", link: "/questions/Q31" }


]

// display the current time
const currentTime = new Date().toLocaleTimeString();
console.log(currentTime);


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(query);
    const [wrapperVisible, setWrapperVisible] = useState(false);
    const searchWrapperRef = useRef(null);
    const searchResultWrapper = useRef(null);

    useEffect(() => {
        if (!searchTerm || searchTerm.trim() === '') {
            setSearchResults(query);
            return;
        }
        const results = query.filter(q => q.text.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
        setWrapperVisible(true);
    }, [searchTerm]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
                setWrapperVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleInputClick = () => {
        setWrapperVisible(true);
    };

    return (
        <section className="topnav">
            <Link href="/questions">
                <Image src="/logo.svg" alt="logo" width={250} height={250} />
            </Link>
            <div id="searchbar">
            <div ref={searchWrapperRef}>
                <div id="search-wrapper">
                    <i className="search-icon fas fa-search"></i>
                    <input type="text" value={searchTerm} id="search" placeholder='Search here...' autoComplete='off' onChange={handleSearch} onClick={handleInputClick} />
                    <button id="search-button">Search</button>
                </div>

                <div id="result-wrapper" className={!wrapperVisible ? "hidden" : ""} ref={searchResultWrapper}>
                    {searchResults.map((result, index) => (
                        <div className='questions-list-item' key={index}>
                            <Link href={result.link}  onClick={() => { setSearchTerm(''); setWrapperVisible(false); }}>{result.text}</Link>
                        </div>
                    ))}
                </div>

            </div>

            </div>


        </section>
    );
}

export default SearchBar;
