// import clsx from "clsx"
export default function WordBox (props) {
    return <>
    <div className="flex justify-center align-middle h-20 w-20
                    text-white mt-10 px-6 py-4 mx-1 bg-[#323232] uppercase border-b-3 text-5xl font-medium ">
        {props.w}
    </div>
    </>
} 



// return <>
// <div className="text-white mt-10 px-6 py-4 mx-1 bg-[#323232] uppercase border-b-3 text-5xl font-medium">
//     {props.w}
// </div>
// </>



// const { status, w } = props
// return <>
//     <div className={clsx(
//         'mt-10 px-6 py-4 mx-1 bg-[#323232] uppercase border-b-3 border-b-white text-5xl font-medium',
//         {
//             'text-[#323232]': !status || status === 'unguessed',
//             'text-white': !status || status === 'right',
//         }
//     )}
//     disabled={status !== 'unguessed'}
//     >
//         {w}
//     </div>