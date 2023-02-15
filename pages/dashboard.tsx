import Container from "@/components/Container"
import Tab from "@/components/utils/Tab"
import Mainlayout from "@/layouts/Mainlayout"

const breadCrumb: { title: string, link: string }[] = [
  {
    title: 'Home',
    link: '#'
  },
  {
    title: 'Dashboard',
    link: '#'
  },
]

const dashboard = () => {
  return (
    <Dashboard />
  )
}

export default dashboard

const Dashboard = () => {
  return (
    <div>
      <Mainlayout
        title={'Dashboard'}
      >
        <Container
          breadCrumb={breadCrumb}
          title={'Dasboard'}
        >
          <Tab
            options={[
              {
                title: 'Own Profile',
                key: 'tab-profile',
                children: <h1>i am from tab profile</h1>
              },
              {
                title: 'Own Profile',
                key: 'tab-change password',
                children: <h1>i am from tab change passowrd</h1>
              },
              {
                title: 'Activities',
                key: 'tab-activities',
                children: <h1>i am from tab activities</h1>
              }
            ]}
          />
        </Container>
      </Mainlayout>
    </div>
  )
}