import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import VibrationIcon from '@material-ui/icons/Vibration';
import SidebarRow from "./SidebarRow";
import Subscriptions from "./Subscriptions";
import "./css/Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
           <SidebarRow selected icon ={HomeIcon} title = "Home"/>
           <SidebarRow icon ={WhatshotIcon} title = "Trending"/>
           <SidebarRow icon ={SubscriptionsIcon} title = "Subscription"/>
           <hr/>
           <SidebarRow icon ={VideoLibraryIcon} title = "Library"/>
           <SidebarRow icon ={HistoryIcon} title = "History"/>
           <SidebarRow icon ={OndemandVideoSharpIcon} title = "Your Videos"/>
           <SidebarRow icon ={WatchLaterIcon} title = "Watch Later"/>
           <SidebarRow icon ={ThumbUpAltIcon} title = "Liked Videos"/>
           <hr/>
           <p className="sidebar__subTitle">SUBSCRIPTIONS</p>
           <Subscriptions name = "Marques Brownlee" imageURL = "https://yt3.ggpht.com/ytc/AAUvwnhoa6jtz7ccGj30Al2Ha8t4ImDVW2U98STxoLXp=s176-c-k-c0x00ffffff-no-rj" />
           <Subscriptions name = "Dave Lee" imageURL = "https://yt3.ggpht.com/ytc/AAUvwniSYmTa5NLqubBNeXbONaln1U2FAIzqrzVNWpjrJw=s176-c-k-c0x00ffffff-no-rj" />
           <Subscriptions name = "Beebom" imageURL = "https://yt3.ggpht.com/ytc/AAUvwnhy6Zu8qtiBa6F3mxnPVRoYbd7O8tmQCyqR1LL86A=s176-c-k-c0x00ffffff-no-rj" />
           <Subscriptions name = "T-Series" imageURL = "https://yt3.ggpht.com/ytc/AAUvwniNTDIUibNIZwwUWC820n6i3yPz-rnBDwOpZED1CQY=s176-c-k-c0x00ffffff-no-rj" />
           <Subscriptions name = "Kalamkaar" imageURL = "https://yt3.ggpht.com/ytc/AAUvwniVLjXfInz7PZ8D378akKknwg2NA-gzNj3WFjZc=s176-c-k-c0x00ffffff-no-rj" />
           <SidebarRow icon ={ExpandMoreIcon} title = "Show More"/>
           <hr/>
           <p className="sidebar__subTitle">MORE FROM YOUTUBE</p>
           <SidebarRow icon ={YouTubeIcon} title = "Youtube Premium"/>
           <SidebarRow icon ={TheatersIcon} title = "Movies"/>
           <SidebarRow icon ={SportsEsportsIcon} title = "Gaming"/>
           <SidebarRow icon ={VibrationIcon} title = "Live"/>
           <hr/>
        </div>
    )
}

export default Sidebar;
