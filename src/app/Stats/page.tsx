import TypingPerformanceCard from "../components/Speedbar";
import TimePieChart from "../components/Timespent";

export default function Stats() {
  return (
    <div className="flex flex-wrap">
       <div className="w-[30%] rounded my-6 mx-6 bg-white ring-4 ring-gray-100 ring-opacity-50 ">
      <TypingPerformanceCard current={92} lastWeek={65} lastMonth={55} />
      <TimePieChart
  data={[
    { label: 'Today', minutes: 2 },
    { label: 'This Week', minutes: 13 },
    { label: 'Last Week', minutes: 46 },
  ]}
/>


       </div>
       <div className="w-[30%] rounded my-6 mx-6 bg-white ring-4 ring-gray-100 ring-opacity-50 ">
      <TypingPerformanceCard current={92} lastWeek={65} lastMonth={55} />
      <TimePieChart
  data={[
    { label: 'Today', minutes: 2 },
    { label: 'This Week', minutes: 13 },
    { label: 'Last Week', minutes: 46 },
  ]}
/>


       </div>
       <div className="w-[30%] rounded my-6 mx-6 bg-white ring-4 ring-gray-100 ring-opacity-50 ">
      <TypingPerformanceCard current={92} lastWeek={65} lastMonth={55} />
      <TimePieChart
  data={[
    { label: 'Today', minutes: 2 },
    { label: 'This Week', minutes: 13 },
    { label: 'Last Week', minutes: 46 },
  ]}
/>


       </div>
       <div className="w-[30%] rounded my-6 mx-6 bg-white ring-4 ring-gray-100 ring-opacity-50 ">
      <TypingPerformanceCard current={92} lastWeek={65} lastMonth={55} />
      <TimePieChart
  data={[
    { label: 'Today', minutes: 2 },
    { label: 'This Week', minutes: 13 },
    { label: 'Last Week', minutes: 46 },
  ]}
/>


       </div>
       <div className="w-[30%] rounded my-6 mx-6 bg-white ring-4 ring-gray-100 ring-opacity-50 ">
      <TypingPerformanceCard current={92} lastWeek={65} lastMonth={55} />
      <TimePieChart
  data={[
    { label: 'Today', minutes: 2 },
    { label: 'This Week', minutes: 13 },
    { label: 'Last Week', minutes: 46 },
  ]}
/>


       </div>
       <div className="w-[30%] rounded my-6 mx-6 bg-white ring-4 ring-gray-100 ring-opacity-50 ">
      <TypingPerformanceCard current={92} lastWeek={65} lastMonth={55} />
      <TimePieChart
  data={[
    { label: 'Today', minutes: 2 },
    { label: 'This Week', minutes: 13 },
    { label: 'Last Week', minutes: 46 },
  ]}
/>


       </div>
    </div>
  );
}