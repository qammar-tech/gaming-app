import { FaWallet } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoStatsChartOutline } from "react-icons/io5";

let role: any = localStorage.getItem('user');
role = JSON.parse(role).accessToken?.user?.role;

const commonItems = [
  { icon: <RxDashboard size={25} className="mr-2" />, text: "Dashboard", path: '/dashboard' },
  { icon: <IoStatsChartOutline size={25} className="mr-4" />, text: "Stats", path: '/stats' },
  { icon: <FaWallet size={25} className="mr-4" />, text: "Groups", path: '/pages' },
  { icon: <FaWallet size={25} className="mr-4" />, text: "Game Play", path: '/game_play' },
  { icon: <MdHelp size={25} className="mr-4" />, text: "Settings", path: '/pages' },
  { icon: <MdHelp size={25} className="mr-4" />, text: "FAQ", path: '/pages' },
  { icon: <MdHelp size={25} className="mr-4" />, text: "Help", path: '/pages' },
];

const organizationItems = [
  { icon: <FaWallet size={25} className="mr-4" />, text: "Organization", path: '/organization' },
];

const menuItems = role === "organization" ? [...commonItems, ...organizationItems] : commonItems;

export default menuItems;
