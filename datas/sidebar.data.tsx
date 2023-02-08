import {FaUserAlt} from 'react-icons/fa'
import  {BiMoney} from 'react-icons/bi'
interface   SidebarInterface{
      title:string;
      icon:React.ReactNode
      link:string;
} 
const sidebarData:SidebarInterface[]=[
    {
        title:'Employee',
        icon:<FaUserAlt/>,
        link:'/employee'
    },
    {
        title:'Salary',
        icon:<BiMoney/>,
        link:'/salary   '
    },
    {
        title:'Attendence',
        icon:<FaUserAlt/>,
        link:''
    },
    {
        title:'Shipment',
        icon:<FaUserAlt/>,
        link:''
    },
    {
        title:'User',
        icon:<FaUserAlt/>,
        link:''
    }
]
export default sidebarData;