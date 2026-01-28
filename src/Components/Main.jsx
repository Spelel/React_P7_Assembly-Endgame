import React from "react"
import Header from "./Header.jsx"
import Status from "./Status.jsx"
import languages from '../Data/languages.js'
import Languages from "./Languages.jsx"
import WordBox from "./WordBox.jsx"
import AplhabetKey from "./AplhabetKey.jsx"
import NewGameButton from "./NewGameButton.jsx"
import clsx from "clsx"

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

        const [currentWord, setCurrentWord] = React.useState("react")

        const [guessedLetters, setGuessedLetters] = React.useState([])

        const currentWordLetters = currentWord.toLowerCase().split('')
        
        // console.log(guessedLetters)

        function addGuessedLetter(letter) {
            setGuessedLetters(prevLetters => 
                prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
            )
        }

        let CurrentWordArray = currentWord.split("").map((word, index) => <WordBox
                                                                    w = {word}
                                                                    key = {index}
                                                                />)
        
        // console.log(CurrentWordArray)
    
        function getLetterStatus(letter) {
            if (!guessedLetters.includes(letter)) {
                return 'unguessed' // nie została jeszcze kliknięta
            }
            return currentWordLetters.includes(letter) ? 'right' : 'wrong'
        }
        

        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').map(akl => {
        const status = getLetterStatus(akl)
            return <AplhabetKey 
                akl = {akl}
                // akl - alphabet key layouts
                status = {status}
                holdW = {() => addGuessedLetter(akl)}
        />})

        // console.log(alphabet)

    return<>
        <section className="flex flex-col justify-start items-center h-screen bg-[#1E1E1E] tracking-wider">
           <Header />
           <Status />
           <div className="flex flex-wrap max-w-150 justify-center"> 
            {langElements}
           </div>
            <div className="flex">
                {CurrentWordArray}
            </div>
            <div className="grid grid-cols-10 gap-2 mt-15">
                {alphabet.slice(0, 20)}
            </div>
            <div className="grid grid-cols-6 gap-1 mt-2">
                {alphabet.slice(20)}
            </div>
            <NewGameButton />
        </section>
    </>
}