import clsx from "clsx"
export default function Status(props) {
    const {status} = props

    const getBackgroundColor = () => {
        // Priorytet 2: Sprawdź status (win/lose)
        if (status === true) {
            return 'bg-[#10A95B]'  // zielony = wygrana
        }
        if (status === false) {
            return 'bg-[#BA2A2A]'  // czerwony = przegrana
        }
    }
    return <>
        <div className={clsx(
            'h-30 w-3/5 mt-10 px-10 py-5 text-3xl text-[#F9F4DA] text-center rounded-md tracking-wider mb-15',
            getBackgroundColor()
        )}>
            {status === true && (
                <>
                    <p>You win!</p>
                    <p>Well done! 🎉</p>
                </>
            )}
            {status === false && (
                <>
                    <p>Game over!</p>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )}
        </div>
    </>
}



{/* <div className="mt-10 bg-[#10A95B] px-55 py-5 text-3xl text-[#F9F4DA] text-center rounded-md tracking-wider mb-15">
            <p>You win!</p>
            <p>Well done! 🎉</p>
        </div> */}