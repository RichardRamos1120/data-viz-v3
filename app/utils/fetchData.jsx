import * as d3 from 'd3';

export async function fetchData(url) {
    
    return await d3.csv(url, data => data);
    
    
}


