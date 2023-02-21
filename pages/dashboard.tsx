import Container from "@/components/Container"
import Collpase from "@/components/utils/Collpase"
import Dropdown from "@/components/utils/Dropdown"
import Tab from "@/components/utils/Tab"
import { faqData } from "@/datas/faq"
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


  const fetchProgram = (key: string) => {
    ///api
  }

  return (
    <div>
      <Mainlayout
        title={'Dashboard'}
      >
        <Container
          breadCrumb={breadCrumb}
          title={'Dasboard'}
        >
          <div className="bg-gray-200 p-2">
            <h1>Custom tab</h1>
          </div>
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
          <div className="bg-gray-200 mt-8 mb-3 p-2">
            <h1>Custom Dropdown</h1>
          </div>
          <div>
          </div>
          <div className="flex gap-2">
            <Dropdown
              // onSelect={(option) => fetchProgram(option.key)}
              wrapperClassName="w-[20%] bg-white"
              options={[
                {
                  key: 'Nepal',
                  value: 'nepal'
                },
                {
                  key: 'India',
                  value: 'india'
                },
                {
                  key: 'China',
                  value: 'china'
                }
              ]}
              placeholder="choose country"
            />
            <Dropdown
              wrapperClassName="w-[40%] bg-white"
              options={[
                {
                  key: 'Butwal',
                  value: 'butwal'
                },
                {
                  key: 'Pokhara',
                  value: 'pokhara'
                },
                {
                  key: 'Biratnagar',
                  value: 'biratnagar'
                }
              ]}
              placeholder="choose city"
            />
          </div>
          <div className="">
            <div className="bg-gray-200 mt-8 mb-3 p-2">
              <h1>Custom Collapse</h1>
            </div>
            {
              faqData?.map((_, i) => (
                <Collpase heading={_.heading} paragraph={_.paragraph} key={i} />
              ))
            }

          </div>
        </Container>
      </Mainlayout>
    </div>
  )
}