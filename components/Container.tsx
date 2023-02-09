
interface Props{
    children:React.ReactNode;
    breadCrumb?:{
        title:string;
        link:string;
    }
    title?:string;
}

const Container =({children,breadCrumb,title}:Props)=>{
    return(
        <div className="m-3">
          <span className="flex gap-2">
            <span>home</span>
            <span>{">"}</span>
            <span>dashboard</span>
          </span>
          <h1 className="text-2xl">Dashboard</h1>
          
        </div>
    )
}

export default Container;