import Footer from "../components/Blocks/Footer";
import Navbar from "../components/Blocks/Navbar";
export default function Layout({children}){
    return(
        <>
            
             <div class=" bg-black h-screen overflow-y-scroll absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px]">
                
            <span className=" w-full fixed z-40">
            <Navbar/>

            </span>
            <span className="  ">
            
            {children}
            </span>
            <Footer/>
             </div>
         
        </>
    )
}