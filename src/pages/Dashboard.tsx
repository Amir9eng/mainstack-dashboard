import AreaChart from '../components/AreaChart';
import DonutChart from '../components/DonutChart';
import info from '../assets/info.svg';
import gl from '../assets/google.svg';
import fb from '../assets/fb.svg';
import insta from '../assets/Instagram.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import '../components/reactTabs.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const flags: any = {
  Nigeria: '🇳🇬',
  'United Kingdom': '🇬🇧',
  Netherlands: '🇳🇱',
  Germany: '🇩🇪',
  Ghana: '🇬🇭',
  Finland: '🇫🇮',
};

const images: any = {
  google: gl,
  facebook: fb,
  instagram: insta,
  twitter: twitter,
  linkedin: linkedin,
};

const locationColor: any = {
  Nigeria: '#599EEA',
  Germany: '#FAB70A',
  Ghana: '#F09468',
  Finland: '#0779E480',
  'United Kingdom': '#844FF6',
  google: '#599EEA',
  facebook: '#FAB70A',
  instagram: '#F09468',
  twitter: '#0779E480',
  linkedin: '#844FF6',
};

const DonutColors = ['#599EEA', '#FAB70A', '#F09468', '#0779E480', '#844FF6'];

const Dashboard = () => {
  const [topLocation, setTopLocation] = useState<
    Array<{ country: string; count: number; percent: string }>
  >([]);
  const [topReferral, setTopReferral] = useState<
    Array<{ source: string; count: number; percent: string }>
  >([]);
  useEffect(() => {
    axios.get('https://fe-task-api.mainstack.io/').then((res) => {
      console.log(res.data);
      setTopReferral(res.data.top_sources);
      setTopLocation(res.data.top_locations);
    });
  }, []);
  const topReferralSource = topReferral.map((el) => el.source);
  const topReferralCount = topReferral.map((el) => el.count);
  const topLocationCountry = topLocation.map((el) => el.country);
  const topLocationCount = topLocation.map((el) => el.count);

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
        <button>
          <span className="text-[#FF5403]">View Analytics</span>
        </button>
      </div>
      <Tabs defaultIndex={4}>
        <TabList className="flex items-center justify-normal space-x-3 py-6 overflow-x-scroll lg:overflow-auto">
          <Tab className="text-xs min-w-fit lg:text-base px-4 py-2 rounded-full border-[#56616B] border-[1px] outline-none hover:cursor-pointer">
            1 Day
          </Tab>
          <Tab className="text-xs min-w-fit lg:text-base px-4 py-2 rounded-full border-[#56616B] border-[1px] outline-none hover:cursor-pointer">
            3 Days
          </Tab>
          <Tab className="text-xs min-w-fit lg:text-base px-4 py-2 rounded-full border-[#56616B] border-[1px] outline-none hover:cursor-pointer">
            7 Days
          </Tab>
          <Tab className="text-xs min-w-fit lg:text-base px-4 py-2 rounded-full border-[#56616B] border-[1px] outline-none hover:cursor-pointer">
            30 Days
          </Tab>
          <Tab className="text-xs min-w-fit lg:text-base px-4 py-2 rounded-full border-[#56616B] border-[1px] outline-none hover:cursor-pointer">
            All time
          </Tab>
          <Tab className="text-xs min-w-fit lg:text-base px-4 py-2 rounded-full border-[#56616B] border-[1px] outline-none hover:cursor-pointer">
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
            <AreaChart />
          </div>
        </TabPanel>
      </Tabs>
      <div className="flex flex-col lg:flex-row lg:space-x-3 space-x-0 space-y-3 lg:space-y-0 mb-8">
        <div className=" w-full h-auto lg:h-[320px] p-8 border-[1px] border-[#EFF1F6] rounded-md">
          <div className="flex justify-between">
            <span className="font-bold">Top Locations</span>
            <button>
              <span className="font-thin text-[#FF5403]">
                View full reports
              </span>
            </button>
          </div>
          {topLocation.length && (
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-5">
              <div className="flex flex-col space-y-5">
                {topLocation.map((el) => (
                  <div className="flex space-x-3 items-center">
                    <span>{flags[el.country]}</span>
                    <p className="min-w-fit">
                      {el.country + ' ' + el.percent}%
                    </p>
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: locationColor[el.country] }}
                    />
                  </div>
                ))}
              </div>
              <DonutChart
                width={'250px'}
                height={'250px'}
                series={topLocationCount}
                labels={topLocationCountry}
                colors={DonutColors}
              />
            </div>
          )}
        </div>
        {topReferral.length && (
          <div className=" w-full h-[320px] p-8 border-[1px] border-[#EFF1F6] rounded-md">
            <div className="flex justify-between">
              <span className="font-bold">Top Referral source</span>
              <button>
                <span className="font-thin text-[#FF5403]">
                  View full reports
                </span>
              </button>
            </div>
            <div className="flex flex-col-reverse lg:flex-row  justify-between items-center mt-5">
              <div className="flex flex-col space-y-5">
                {topReferral.map((el) => (
                  <div className="flex space-x-3 items-center">
                    <img src={images[el.source]} alt="" className="w-5 h-5" />
                    <p className="min-w-fit">{el.source + ' ' + el.percent}%</p>
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: locationColor[el.source] }}
                    />
                  </div>
                ))}
              </div>
              <DonutChart
                width={'250px'}
                height={'250px'}
                series={topReferralCount}
                labels={topReferralSource}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
