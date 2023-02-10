const Table=()=>{
    return(
            <table className="w-full mt-3">
                <thead className=" text-white bg-gray-600">
                  <tr className="p-3">
                    <th className="p-3">SN</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Address</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Age</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody className="">
                   {
                    [0,0,0,0,0].map((data,i)=>{
                        return(
                            <tr className="bg-gray-300 p-3">
                                <td className="p-3 ">1</td>
                                <td className="p-3">Ameer</td>
                                <td className="p-3">ktm</td>
                                <td className="p-3">98075</td>
                                <td className="p-3">24</td>
                                <td className="p-3">edit</td>
                            </tr>
                        )
                    })
                   }
                </tbody>
            </table>
    )
}

export default Table;