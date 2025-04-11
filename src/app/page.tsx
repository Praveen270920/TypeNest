
import TypingPerformanceCard from "./components/Speedbar";
import TimePieChart from "./components/Timespent";

export default function Home() {
  return (
   <div className="flex">
    <div className="w-1/2 rounded my-12 ml-36 mr-6 bg-white ring-4 ring-gray-100 ring-opacity-50 p-8">
      <h2 className="capitalize font-bold text-xl text-gray-600">my lesson plan</h2>
      <div className="w-1/2 mt-6 bg-gray-100 shadow-md rounded hover:shadow-xl bg-cover">
        <img className="rounded-t" src="/img-1.jpg" alt="Home image " />
        <h2 className="my-8 m-4 text-gray-600">TypeNest</h2>
        <div className="flex justify-between m-4">
          <div className="text-gray-400 pb-4">
            <p>Scores :</p>
            <p>Stars :</p>
          </div>
          <div>
            <a href="" className="py-2 px-6 bg-blue-400 rounded inline-block align-right text-white">Start</a>
          </div>
        </div>
       
      </div>
    </div>
    <div className="w-1/3 rounded my-12 mr-36 ml-6 bg-white ring-4 ring-gray-100 ring-opacity-50 ">
      <TypingPerformanceCard current={92} lastWeek={65} lastMonth={55} />
      <TimePieChart
  data={[
    { name: 'Today', minutes: 2 },
    { name: 'This Week', minutes: 13 },
    { name: 'Last Week', minutes: 46 },
  ]}
/>


    </div>
   </div>
  );
}
