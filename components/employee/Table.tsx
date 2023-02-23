import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Employee } from "./Form";

const Table = () => {
  const [employeelist, setEmployeelist] = useState<Employee[]>([]);

  const fetchAllEmploye = async () => {
    try {
      const data = await axios.get("http://localhost:3000/employee");
      if (data) {
        setEmployeelist(data?.data as Employee[]);
      }
    } catch (e) {}
  };

  useEffect(() => {
    fetchAllEmploye();
  }, []);

  return (
    <div className="bg-white p-2">
      {/* {JSON.stringify(employeelist)} */}
      <table className="w-full mt-3">
        <thead className=" text-white bg-purple-600  ">
          <tr className="">
            <th className="p-3">SN</th>
            <th className="p-3">Name</th>
            <th className="p-3">Address</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Age</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {employeelist?.map((data, i) => {
            return (
              <tr className="hover:bg-gray-200  p-3 text-center">
                <td className="p-3 ">{i + 1}</td>
                <td className="p-3">{data.name}</td>
                <td className="p-3">{data.address}</td>
                <td className="p-3">{data.phone}</td>
                <td className="p-3">{data.age}</td>
                <td className="p-3">
                  <Link href={`/employee/${data.id}`}>edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
