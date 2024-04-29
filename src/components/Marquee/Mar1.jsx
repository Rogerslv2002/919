import Marquee from "react-fast-marquee";

export default function Mar1() {
    return(
        <>
        <Marquee 
         speed={170}
           
        >
      <div className=" flex flex-row justify-between w-full gap-28">

         <Texto TXT={'Website'}/>
         <Texto TXT={'Ecommerce'}/>
         <Texto TXT={'Aplicativos'}/>
         <Texto TXT={'Sistemas'}/>
         <Texto TXT={'IA'}/>
         <Texto TXT={'Infraestrutura'}/>
         <Texto TXT={'Anúncios'}/>
         <Texto TXT={'Consultoria'}/>
         <Texto TXT={''}/>




      </div>
         

        </Marquee>
        
        </>
    )
    
}

const Texto =({TXT})=>{
    return(
        <>
         <h3 className=" text-5xl text-black font-semibold">{TXT}</h3>
        </>
    )
}