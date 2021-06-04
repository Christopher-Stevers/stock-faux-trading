import Header from '../components/header.js'

import { useEffect } from "react";
import LineGraph from '../components/lineGraph'
export default function Portfolio(){
    if(document.querySelectorAll(".chart")[1])document.getQuerySelector(".chart")[1].remove();
    useEffect(()=>{LineGraph()},[]);
    return(<div>
        <Header />
        <figure id="lineGraph"></figure>
        <button>addStock</button>
    </div>)
}