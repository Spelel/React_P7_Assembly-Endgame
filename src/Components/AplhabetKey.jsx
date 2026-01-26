export default function AplhabetKey (props) {
    return <>
        <div className="flex justify-center uppercase bg-[#FCBA29] text-4xl border-white border-2 rounded-md m-1 p-5 "onClick={props.holdW}>
            {props.akl}
        </div>
    </>
}