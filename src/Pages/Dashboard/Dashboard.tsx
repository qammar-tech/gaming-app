import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import Input from '../../Components/InputFields/InputField'
import Button from '../../Components/Buttons/Button'
const dummyData = [
    // {
    //     title: 'Game Options',
    //     description: '32',
    //     linkText: 'Explore Details',
    //     linkUrl: '#',
    // },
  {
    title: 'Leader Board',
    description: '19',
    linkText: 'Explore Details',
    linkUrl: '#',
  },
];
const gameStats = [
    {
      playerName: 'Regular Play',
      points: 30,
      assists: 8,
      rebounds: 12,
      steals: 2,
      blocks: 1,
    },
    {
      playerName: 'Multi-Player',
      points: 28,
      assists: 10,
      rebounds: 5,
      steals: 3,
      blocks: 0,
    },
    {
      playerName: 'Practice Session',
      points: 21,
      assists: 14,
      rebounds: 6,
      steals: 9,
      blocks: 3,
    },
    // Add more players' stats as needed
  ];
  const groundPlays = [
    {
      playMode: 'Ranked Match',
      totalPoints: 42,
      assists: 7,
      totalRebounds: 10,
      steals: 4,
      blocks: 2,
    },
    {
      playMode: 'Team Deathmatch',
      totalPoints: 35,
      assists: 12,
      totalRebounds: 3,
      steals: 6,
      blocks: 1,
    },
    {
      playMode: 'Survival Mode',
      totalPoints: 29,
      assists: 9,
      totalRebounds: 8,
      steals: 3,
      blocks: 0,
    },
    {
      playMode: 'Capture the Flag',
      totalPoints: 37,
      assists: 5,
      totalRebounds: 7,
      steals: 2,
      blocks: 1,
    },
    // Add more plays as needed
  ];  
export default function Dashboard() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sensorModal, setSensorModal] = useState(false);
  const [credits, setCredits] = useState(0);
  const [seriesPlayInput, setSeriesPlayInput] = useState<string>(''); // Add the correct type for seriesPlayInput
  const [sensorName, setSensorName] = useState<string>(''); // Add the correct type for seriesPlayInput
  let credit: any =localStorage.getItem('user')
  credit=JSON.parse(credit)

  useEffect(()=>{
  setCredits(credit?.accessToken?.user?.credits)
  },[credit])
    const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeSensorModal = () => {
    setSensorModal(false)
  };

  const handleSeriesPlaySubmit = () => {
    if(seriesPlayInput) {
      // Add your logic to handle the series play input submission
      console.log('Series Play input submitted:', seriesPlayInput);
      navigate("/game_play", { state: { single_shot: false, count: seriesPlayInput } });
      // Close the modal after handling the submission
      closeModal();
      
    }
  };


  const handleClick = (data:any) => {
    if(credits > 0 && credits !=null && credits != undefined){
      if (data === 'single_shot') {
        navigate("/game_play", { state: { single_shot: true} });
      } else if (data === 'series_play') {
        openModal();
      }
    }else{
      navigate("/payments")
    }
  };
  return (
    <>
    <div className="flex justify-end mr-7">
    <Button
      type="submit"
      text="Add Sensors"
      style={{ marginBottom: '1.5rem' }} 
      
      onClick={()=>{setSensorModal(true)}}
                              
     />    
    </div>
    <div className="flex justify-center items-top gap-10 mb-5 h-[10rem]">
         <div className="max-w-sm p-6 w-[70rem] bg-primeColor opacity-80 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* <IoStatsChartOutline style={{ height: '25px', width: '25px', color:'white' }} /> */}
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-300 dark:text-white">Game Options</h5>
          </a>
          <div className="gap-2 flex pt-2">
          <button
          onClick={() => handleClick("single_shot")}
          className="text-gray-300 bg-black w-[7rem] h-[2rem] hover:bg-black hover:opacity-80" style={{borderRadius:'7px'}}>
          <Link  to={""}>Single Shot</Link>
          </button>
          <button 
          onClick={() => handleClick("series_play")}
          className="text-gray-300 bg-black w-[9rem] h-[2rem] hover:bg-black hover:opacity-80" style={{borderRadius:'7px'}}>
          <Link  to={""}>Series of Shots</Link>
          </button>
          </div>

          <Modal
          isOpen={sensorModal}
          onRequestClose={closeSensorModal}
          contentLabel="Series Play Modal"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              width: '50%', // Adjust the width as needed
              height: '50%', // Adjust the height as needed
              margin: 'auto',
              borderRadius:'10px'
            },
          }}
        >
          <div className='mt-[2rem] flex justify-around'>
                      <Input
                          type="text"
                          style={{ marginBottom: '0.25rem' }}
                          name="add_sensors"
                          //  defaultValue="1"
                          title='Add Sensor' 
                          required={true}
                          handleChange={(e:any) => {
                            if(e.target.value) {
                              setSensorName(e.target.value)
                            }
                          }}
                          validationRules={{ required: 'Email is required' }}
                          />
                     

                  </div>
                  <div className='grid justify-center mt-10'>
                          <Button
                              type="submit"
                              text="Add"
                              style={{ marginBottom: '1.5rem' }} 
                              
                              onClick={closeSensorModal}/>
          <Button
                              type="submit"
                              text="Close"
                              style={{ marginBottom: '1.5rem', background:'red' }} 
                              onClick={closeSensorModal}/>
                      </div>
        
        </Modal>

          <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Series Play Modal"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
               width: '50%', // Adjust the width as needed
              height: '50%', // Adjust the height as needed
              margin: 'auto',
              borderRadius:'10px'
            },
          }}
        >
          <div className='mt-[2rem] flex justify-around'>
                      <Input
                          type="text"
                          style={{ marginBottom: '0.25rem' }}
                          name="shots"
                          //  defaultValue="1"
                          title='Shots' 
                          handleChange={(e:any) => setSeriesPlayInput(e.target.value)}
                          />
                     

                  </div>
                  <div className='grid justify-center mt-10'>
                          <Button
                              type="submit"
                              text="Play"
                              style={{ marginBottom: '1.5rem' }} 
                              
                              onClick={handleSeriesPlaySubmit}/>
          <Button
                  type="submit"
                  text="Close"
                  style={{ marginBottom: '1.5rem', background:'red'}} 
                  onClick={closeModal}/>
                      </div>
        
        </Modal>
          {/* <a href={data.linkUrl} className="inline-flex items-center text-blue-600 hover:underline">
            {data.linkText}
          </a> */}
        </div>
        <div className="max-w-sm p-6 w-[70rem] bg-primeColor opacity-80 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* <IoStatsChartOutline style={{ height: '25px', width: '25px', color:'white' }} /> */}
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-300 dark:text-white">Game Options</h5>
          </a>
      <div className="grid">
       <span className="text-gray-300">Successful passes: 23</span>
       <span className="text-gray-300">Consecutive Successes: 12</span>
       <span className="text-gray-300">Miss Percentages: 45</span>
      </div>
          {/* <a href={data.linkUrl} className="inline-flex items-center text-blue-600 hover:underline">
            {data.linkText}
          </a> */}
        </div>
      {dummyData.map((data, index) => (
        <div key={index} className="max-w-sm p-6 w-[70rem] bg-primeColor opacity-80 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* <IoStatsChartOutline style={{ height: '25px', width: '25px', color:'white' }} /> */}
          <a href={data.linkUrl}>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-300 dark:text-white">{data.title}</h5>
          </a>
          <p className="mb-3 pt-3 text-6xl leading-[4rem] text-white dark:text-gray-400 text-center">{data.description}</p>
          {/* <a href={data.linkUrl} className="inline-flex items-center text-blue-600 hover:underline">
            {data.linkText}
          </a> */}
        </div>
      ))}
    </div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
      <h5 className="mb-5 text-3xl font-semibold tracking-tight text-gray-700 dark:text-white">Play Mode</h5>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-primeBGColor opacity-90 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Play Mode
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
            <th scope="col" className="px-6 py-3">
              Assists
            </th>
            <th scope="col" className="px-6 py-3">
              Rebounds
            </th>
            <th scope="col" className="px-6 py-3">
              Steals
            </th>
            <th scope="col" className="px-6 py-3">
              Blocks
            </th>
          </tr>
        </thead>
        <tbody>
          {gameStats.map((player, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0
                  ? 'odd:bg-primeColor opacity-80 odd:dark:bg-gray-900'
                  : 'even:bg-primeBGColor opacity-80 even:dark:bg-gray-800'
              } border-b dark:border-gray-700`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
                {player.playerName}
              </th>
              <td className="px-6 py-4">{player.points}</td>
              <td className="px-6 py-4">{player.assists}</td>
              <td className="px-6 py-4">{player.rebounds}</td>
              <td className="px-6 py-4">{player.steals}</td>
              <td className="px-6 py-4">{player.blocks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
        <div className="flex justify-between mb-5">
    <h5 className="text-3xl font-semibold tracking-tight text-gray-700 dark:text-white">Stats</h5>
    <h4 className="text-xl font-semibold tracking-tight cursor-pointer text-primeColor hover:text-primeBGColor dark:text-white">See all...</h4>
        </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        {/* <thead className="text-xs text-primeColor uppercase bg-white border border-gray-900 opacity-90 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Stats
            </th>
            <th scope="col" className="px-6 py-3">
              
            </th>
            <th scope="col" className="px-6 py-3">
              
            </th>
            <th scope="col" className="px-6 py-3">
              
            </th>
            <th scope="col" className="px-6 py-3">
              
            </th>
           
            <th scope="col" className="px-6 py-3 cursor-pointer hover:text-gray-300">
              More ...
            </th>
          </tr>
        </thead> */}
       <thead className="text-xs text-white uppercase bg-primeBGColor opacity-90 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Splits
          </th>
          <th scope="col" className="px-6 py-3">
            Points
          </th>
          <th scope="col" className="px-6 py-3">
            Assists
          </th>
          <th scope="col" className="px-6 py-3">
            Rebounds
          </th>
          <th scope="col" className="px-6 py-3">
            Steals
          </th>
          <th scope="col" className="px-6 py-3">
            Blocks
          </th>
        </tr>
      </thead>

        <tbody>
          {groundPlays.map((play, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0
                  ? 'odd:bg-primeColor opacity-80 odd:dark:bg-gray-900'
                  : 'even:bg-primeBGColor opacity-80 even:dark:bg-gray-800'
              } border-b dark:border-gray-700`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
              {play.playMode}
              </th>
              <td className="px-6 py-4">{play.totalPoints}</td>
            <td className="px-6 py-4">{play.assists}</td>
            <td className="px-6 py-4">{play.totalRebounds}</td>
            <td className="px-6 py-4">{play.steals}</td>
            <td className="px-6 py-4">{play.blocks}</td>    
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</>
  );
}
