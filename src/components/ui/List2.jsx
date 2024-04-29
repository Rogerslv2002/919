



export default function List2(props){
    return(
        <span className=" flex flex-col gap-3">
            <p className=" text-black font-semibold text-lg">{props.Titulo}</p>
            <ul className=" list-disc pl-5 text-black font-medium text-lg">
                <li>{props.Item}</li>
                <li>{props.Item2}</li>
                <li>{props.Item3}</li>
                <li>{props.Item4}</li>
                <li>{props.Item5}</li>

            </ul>
        </span>
    )
}