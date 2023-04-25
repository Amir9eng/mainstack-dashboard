import AreaChart from '../components/AreaChart';
import DonutChart from '../components/DonutChart';
import info from '../assets/info.svg';
import ng from '../assets/Country=Nigeria, Style=Flag, Radius=On.svg';
import us from '../assets/Country=United States of America, Style=Flag, Radius=On.svg';
import an from '../assets/Country=Andorra, Style=Flag, Radius=On.svg';
import nd from '../assets/Country=Netherlands, Style=Flag, Radius=On.svg';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import '../components/reactTabs.css';

const Dashboard = () => {
  const topLocation = {
    labels: ['Nigeria', 'United States', 'Netherlands', 'Andora', 'Others'],
    series: [55, 22, 84, 23, 56],
  };
  const topReferral = {
    labels: ['Nigeria', 'United States', 'Netherlands', 'Andora', 'Others'],
    series: [73, 82, 14, 33, 56],
  };
  return (
    <section className="w-full px-5 py-5 lg:px-16 lg:py-0">
      <h1 className="py-2 lg:py-5 font-bold">Dashboard</h1>
      <div className="flex items-center justify-between my-2 lg:my-6">
        <div className="space-y-3">
          <h2 className="text-lg lg:text-2xl font-bold">
            Good morning, Blessing ⛅️
          </h2>
          <span className="text-sm">Check out your dashboard summary.</span>
        </div>
        <span className="text-[#FF5403]">View Analytics</span>
      </div>
      <Tabs defaultIndex={4}>
        <TabList className="flex items-center justify-normal space-x-3 py-6 overflow-x-scroll lg:overflow-auto">
          <Tab className="text-xs min-w-fit lg:text-base px-4 py-2 rounded-full border-[#56616B] border-[1px] hover:cursor-pointer">
            1 Day
          </Tab>
          <Tab className="text-xs min-w-fit lg:text-base px-4 py-2 rounded-full border-[#56616B] border-[1px] hover:cursor-pointer">
            3 Days
          </Tab>
          <Tab className="text-xs min-w-fit lg:text-base px-4 py-2 rounded-full border-[#56616B] border-[1px] hover:cursor-pointer">
            7 Days
          </Tab>
          <Tab className="text-xs min-w-fit lg:text-base px-4 py-2 rounded-full border-[#56616B] border-[1px] hover:cursor-pointer">
            30 Days
          </Tab>
          <Tab className="text-xs min-w-fit lg:text-base px-4 py-2 rounded-full border-[#56616B] border-[1px] hover:cursor-pointer">
            All time
          </Tab>
          <Tab className="text-xs min-w-fit lg:text-base px-4 py-2 rounded-full border-[#56616B] border-[1px] hover:cursor-pointer">
            Custom Date
          </Tab>
        </TabList>

        <TabPanel>1 Day</TabPanel>
        <TabPanel>3 Days</TabPanel>
        <TabPanel>7 Days</TabPanel>
        <TabPanel>30 Days</TabPanel>
        <TabPanel>
          <div className="w-full h-[350px] lg:h-[400px] my-6 p-5 lg:p-8 border-[1px] border-[#EFF1F6] rounded-md">
            <div className="flex justify-between">
              <h2 className="font-bold">Page Views</h2>
              <img src={info} alt="" />
            </div>
            <span className="inline-block text-xs mb-3  ">All time</span>
            <h1 className="text-5xl font-bold">500</h1>
            <AreaChart></AreaChart>
          </div>
        </TabPanel>
      </Tabs>
      <div className="flex flex-col lg:flex-row lg:space-x-3 space-x-0 space-y-3 lg:space-y-0 mb-8">
        <div className=" w-full h-auto lg:h-[320px] p-8 border-[1px] border-[#EFF1F6] rounded-md">
          <div className="flex justify-between">
            <span className="font-bold">Top Locations</span>
            <span className="font-thin text-[#FF5403]">View full reports</span>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-5">
            <div className="flex flex-col space-y-5">
              <div className="flex space-x-3">
                <img src={ng} alt="" />
                <p className="min-w-fit">
                  {'Nigeria ' + topLocation.series[0]}
                </p>
              </div>
              <div className="flex space-x-3">
                <img src={us} width={30} alt="" />
                <p className="min-w-fit">
                  {'United States ' + topLocation.series[1]}
                </p>
              </div>
              <div className="flex space-x-3">
                <img src={nd} alt="" />
                <p className="min-w-fit">
                  {'Netherlands ' + topLocation.series[2]}
                </p>
              </div>
              <div className="flex space-x-3">
                <img src={an} alt="" />
                <p className="min-w-fit">
                  {'Andorra ' + topLocation.series[3]}
                </p>
              </div>
            </div>
            <DonutChart
              width={'250px'}
              height={'250px'}
              series={topLocation.series}
              labels={topLocation.labels}
            ></DonutChart>
          </div>
        </div>
        <div className=" w-full h-[320px] p-8 border-[1px] border-[#EFF1F6] rounded-md">
          <div className="flex justify-between">
            <span className="font-bold">Top Referral source</span>
            <span className="font-thin text-[#FF5403]">View full reports</span>
          </div>
          <div className="flex flex-col-reverse lg:flex-row  justify-between items-center mt-5">
            <div className="flex flex-col space-y-5">
              <div className="flex space-x-3">
                <img src={ng} alt="" />
                <p className="min-w-fit">
                  {'Nigeria ' + topReferral.series[0]}
                </p>
              </div>
              <div className="flex space-x-3">
                <img src={us} width={30} alt="" />
                <p>{'United States ' + topReferral.series[1]}</p>
              </div>
              <div className="flex space-x-3">
                <img src={nd} alt="" />
                <p className="min-w-fit">
                  {'Netherlands ' + topReferral.series[2]}
                </p>
              </div>
              <div className="flex space-x-3">
                <img src={an} alt="" />
                <p className="min-w-fit">
                  {'Andorra ' + topReferral.series[3]}
                </p>
              </div>
            </div>
            <DonutChart
              width={'250px'}
              height={'250px'}
              series={topReferral.series}
              labels={topReferral.labels}
            ></DonutChart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
