



export default function Arccord({Titulo,children}){
    return(
        <>
        <div> 
    <details className="group [&_summary::-webkit-details-marker]:hidden open:bg-lime-300 pb-5 rounded-xl" >
    <summary
      className=" group-open:bg-lime-300 flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white p-4 text-gray-900"
    >
      <h2 className=" font-semibold text-xl text-black">{Titulo}</h2>

      <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700">
    {children}
    </p>
  </details>
        </div>
        </>
    )
}