import React from "react";
import { Macbookscroll } from "./ui/macbook-scroll";
import Link from "next/link";

function MacbookScroll() {

    return (
        <div className="overflow-hidden dark:bg-black bg-white w-full">
        <Macbookscroll
        title={
          <span className=" font-serif">
            Where words fail, music speaks.
          </span>
        }
        
        src={'/courses/band.jpg'}
        showGradient={false}
      />
      </div>    
    )
}


export default MacbookScroll
