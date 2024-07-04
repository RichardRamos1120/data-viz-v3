"use client";

import { useState,} from 'react';
import useStore from '@/app/store/useStore';
export default function MainDropdown() {
  const [zone, setZone] = useState('all');
  const { state, setState } = useStore();



  function changeZone(e) {
    setState(e.target.value);
  } 

  return (
    <div class="maindropdown-container">
        <h2>Current Zone</h2>
        <select name="zoneDropdown" id="zoneDropdown" onChange={(e)=> changeZone(e)}>
            <option value="all">All</option>
            <option value="Southern Marin">Southern Marin</option>
            <option value="Novato">Novato</option>
            <option value="West Marin">West Marin</option>
            <option value="San Rafael">San Rafael</option>
            <option value="Central Marin">Central Marin</option>
            <option value="Non Participating">Non Participating</option>    
        </select>
    </div>
  )
}
