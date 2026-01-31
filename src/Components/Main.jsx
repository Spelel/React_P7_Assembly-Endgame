import React, { useOptimistic } from "react"
import Header from "./Header.jsx"
import Status from "./Status.jsx"
import languages from '../Data/languages.js'
import Languages from "./Languages.jsx"
import WordBox from "./WordBox.jsx"
import AplhabetKey from "./AplhabetKey.jsx"
import NewGameButton from "./NewGameButton.jsx"
import clsx from "clsx"

export default function Main () {

    function getFarewellText(language) {
        const options = [
            `Farewell, ${language}`,
            `Adios, ${language}`,
            `R.I.P., ${language}`,
            `We'll miss you, ${language}`,
            `Oh no, not ${language}!`,
            `${language} bites the dust`,
            `Gone but not forgotten, ${language}`,
            `The end of ${language} as we know it`,
            `Off into the sunset, ${language}`,
            `${language}, it's been real`,
            `${language}, your watch has ended`,
            `${language} has left the building`
        ];
    
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    }
    
        const [currentWord, setCurrentWord] = React.useState("react")

        const [guessedLetters, setGuessedLetters] = React.useState([])

        const currentWordLetters = currentWord.toLowerCase().split('')

        const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length

        const langElements = languages.map((lan, index) => {
            const isLanguageLost = index < wrongGuessCount
                return (
            <Languages
                className = {clsx(`
                ${lan.bgColor} 
                ${lan.textColor} 
                px-2 py-1 rounded-md m-0.5 font-bold text-2xl relative
                `)}
                name = {lan.name}
                status = {`${isLanguageLost ? 'wrong' : 'fine'}`}
                />)})




        const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))

        const isGameLost = wrongGuessCount >= languages.length - 1

        const isgameOver = isGameWon || isGameLost

        const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]

        const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

        console.log(isLastGuessIncorrect)
        
        // console.log(guessedLetters)

        function addGuessedLetter(letter) {
            setGuessedLetters(prevLetters => 
                prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
            )
        }

        let CurrentWordArray = currentWord.split("").map((word, index) => {
            
        return <WordBox
            w = {guessedLetters.includes(word) ? word : ""}
            // w = {word}
            key = {index}
            
        />})
    
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

        function renderGameInfo() {
            if (!isgameOver && isLastGuessIncorrect) {
                return <div className="
                h-30 w-3/5 text-center mt-10 px-10 py-10 bg-[#7A5EA7] text-white text-3xl mb-15 border-1 rounded-md border-dashed border-black 
                ">{getFarewellText(languages[wrongGuessCount - 1].name)}</div>
            }
            if (isGameWon) {
                return <Status status = {true} />
            }
            if (isGameLost) {
                return <Status status = {false} />
            }
            return <div className="h-30 w-3/5 mt-10 px-10 py-5 text-white text-center text-3xl mb-15"></div>
        }

    return<>
        <section className="flex flex-col justify-start items-center h-screen bg-[#1E1E1E] tracking-wider">
           <Header />
           {renderGameInfo()}
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
                {isgameOver && <NewGameButton />}
        </section>
    </>
}