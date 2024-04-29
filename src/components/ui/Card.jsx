



export default function Card(props){
    return(
        <div className=" h-96 grid grid-flow-row backdrop-blur gap-5 p-5 border-2 rounded-lg place-items-center text-centers border-lime-300 hover:border-lime-300">
            <span className=" text-7xl text-white">{props.Icon}</span>
            <p className=" text-4xl font-semibold text-center text-lime-300">{props.Titulo}<br/>{props.Titulo2}</p>
             <p className=" text-white text-center font-medium text-lg">{props.Texto}</p>
            <span>

            </span>
        </div>
    )
}