import sidebarData from "@/datas/sidebar.data";
import Head from "next/head";
import Link from "next/link";
interface Props{
    title?:string;
    children?:React.ReactNode
}

const Mainlayout=({title,children}:Props)=>{
    return(
        <>
        <Head>
            <title>{title||'demo'}</title>
            <link rel="stylesheet" href="" />
        </Head>
    <main>
           <div className="min-h-screen text-white w-[20%] bg-purple-600 fixed inset-0">
             <div className=" ">
                <h1 className="text-3xl px-12">Admin</h1>
             </div>
             <div className="mt-2">
                <ul className="">
                   {
                         sidebarData.map( (data,index)=>{
                            return(
                               <Link  href={data?.link}>
                                <li  className="p-2 px-5 hover:bg-purple-900 flex gap-2 items-center ">
                                  <span>
                                    {data?.icon}
                                  </span>
                                  <span>
                                    {data?.title}
                                  </span>
                                </li>
                               </Link>
                            )
                         }  )
                   }
                   
                </ul>
             </div>
           </div>
            
          {children}
        </main>
        </>
    )
}


export default Mainlayout