import React from "react"
import Header from "./Header.jsx"
import Status from "./Status.jsx"
import languages from '../Data/languages.js'
import Languages from "./Languages.jsx"

export default function Main () {

    // console.log(languages)

    const langElements = languages.map(lan => <Languages
                                                className = {`
                                                    ${lan.bgColor} 
                                                    ${lan.textColor} 
                                                    px-2 py-1 rounded-md m-0.5 font-bold text-2xl
                                                    `}
                                                    name = {lan.name}
        />)

    return<>
        <section className="flex flex-col justify-start items-center h-screen bg-[#323232] tracking-wider">
           <Header />
           <Status />
           <div className="flex flex-wrap max-w-150 justify-center">
            {langElements}
           </div>
        </section>
    </>
}