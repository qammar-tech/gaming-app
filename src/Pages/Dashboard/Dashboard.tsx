

const dummyData = [
    {
        title: 'Total Points',
        description: '32',
        linkText: 'Explore Details',
        linkUrl: '#',
    },
  {
    title: 'Games Lost',
    description: '13',
    linkText: 'Explore Details',
    linkUrl: '#',
  },
  {
    title: 'Games Win',
    description: '19',
    linkText: 'Explore Details',
    linkUrl: '#',
  },
  {
    title: 'Ledger Board',
    description: '24',
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
  return (
    <>
    <div className="flex justify-center items-top gap-10 mb-5 h-[10rem]">
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
