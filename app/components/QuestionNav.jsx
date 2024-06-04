"use client";
import { CaretUp, CaretDown } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import navItems from '@/app/components/NavItem';

export default function Page() {
    // side navbar
    const [selectedItem, setSelectedItem] = useState(null);
    const [subItem, setSubItem] = useState(null);

    function handleNavItemClick(item) {
        setSelectedItem(item);
        if (selectedItem === item) {
            setSelectedItem(null);
        }
    }

    function handleSubItemClick(item) {
        setSubItem(item);
    }

    useEffect(() => {
        return () => 0;
    }, [selectedItem, subItem]);

    return (
        <section className='main-nav'>
            <div>
                <div>
                    <Image src='/logo.svg' width={213} height={37} alt="Image" />
                </div>
                <div>
                    <nav className='nav-item'>
                        {navItems.map((item, index) => {
                            return (
                                <div key={item.slug}>
                                    <h2
                                        className="nav-item-title"
                                        name={item.slug}
                                        onClick={() => handleNavItemClick(item)}
                                    >
                                        {item.name} {selectedItem && selectedItem === item ? <CaretUp size={18} /> : <CaretDown size={18} />}
                                    </h2>
                                    <div className={selectedItem && selectedItem === item ? "" : "hidden"}>
                                        {item.navItems.map((navItem, index) => {
                                            return (
                                                <ul className="nav-submenu" key={navItem.slug}>
                                                    <li>
                                                        <Link
                                                            href={`/questions/${navItem.slug}`}
                                                            name={navItem.slug}
                                                            onClick={() => handleSubItemClick(navItem)}
                                                            className={subItem && subItem === navItem ? "subItemActive" : ""}
                                                        >
                                                            {navItem.name}
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </section>
    );
}
