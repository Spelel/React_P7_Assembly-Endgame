import clsx from "clsx"
export default function AplhabetKey (props) {
    const { status, holdW, akl } = props
    return <>
        <button className={clsx(
            'flex justify-center uppercase text-4xl border-white border-2 rounded-md m-1 p-5',
            {
                'bg-[#FCBA29]': !status || status === 'unguessed',
                'bg-[#4CAF50]': status === 'right',
                'bg-[#EC5D49]': status === 'wrong',
            }
        )}
        onClick={holdW}
        disabled={status !== 'unguessed'}
        >
            {akl}
        </button>
    </>
}




// zielony = #10A95B
// czerwony = #EC5D49


{/* <div className="flex justify-center uppercase bg-[#FCBA29] text-4xl border-white border-2 rounded-md m-1 p-5 "
onClick={props.holdW}>
    {props.akl}
</div> */}