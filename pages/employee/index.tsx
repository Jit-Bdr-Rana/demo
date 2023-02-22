import Container from "@/components/Container"
import Table from "@/components/employee/Table"
import Mainlayout from "@/layouts/Mainlayout"
import Link from "next/link"

const index = () => {
  return (
    <Index />
  )
}
export default index

const breadCrumb: { title: string, link: string }[] = [
  {
    title: 'Home',
    link: '/employee'
  },
  {
    title: 'Employee',
    link: '#'
  },
]

const Index = () => {
  return (
    <Mainlayout title="employee">
      <Container
        breadCrumb={breadCrumb}
        title="Employee"
      >
        <div className="flex justify-end my-5">
          <Link href={'/employee/create'}>
            <span className="bg-purple-500 text-white hover:bg-purple-800 rounded-md px-3 py-2">Add Employee</span>
          </Link>
        </div>
        <Table />
      </Container>
    </Mainlayout>
  )

}