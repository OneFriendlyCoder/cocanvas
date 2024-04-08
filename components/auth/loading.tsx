import Image from "next/image";

const Loading = () => {
    return (  
        <div className="w-full h-full flex flex-col justify-center items-center">
            <Image src="/cocanvasnbg.png" alt="Logo" width={120} height={120} className="animate-pulse duration-700"/>
        </div>
    );
}
 
export default Loading;