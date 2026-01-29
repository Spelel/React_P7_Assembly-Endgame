import clsx from "clsx"
export default function Languages(props) {
    return <>
    <div className="relative">
        <div className={clsx(
            `${props.className}`,
            {
                'opacity-20': props.status === 'wrong'
            }
        )}>
            {props.name}
        </div>
        <div className={clsx(
                'absolute inset-y-2 inset-x-8',
                {
                    'opacity-0': props.status === 'fine',
                    'opacity-100': props.status === 'wrong',
                }
            )}>💀</div>
    </div>
    </>
}




// absolute inset-1 inset-x-5