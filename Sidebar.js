
import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone';
import EmojiFlagsTwoToneIcon from '@mui/icons-material/EmojiFlagsTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import VideoLibraryTwoToneIcon from '@mui/icons-material/VideoLibraryTwoTone';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow src="./images/elon.jpeg" title="Sulav" />
        <SidebarRow 
        Icon={LocalHospitalTwoToneIcon} 
        title="Covid 19 information Center"
        /> 
        <SidebarRow Icon ={EmojiFlagsTwoToneIcon}title='Sales'/>
        <SidebarRow Icon ={PeopleAltTwoToneIcon} title='Crew Members'/>
        <SidebarRow Icon ={ChatTwoToneIcon} title='Inbox'/>
        <SidebarRow Icon ={ShoppingBagTwoToneIcon} title='Suppliers'/>
        <SidebarRow Icon ={VideoLibraryTwoToneIcon} title='Lauch POS'/>
        

    </div>

  );
}

export default Sidebar;
