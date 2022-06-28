import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, IconButton } from '@mui/material';
function Header() {
  return (
    <div className="header">
        <div className='header__left'>
            <img
             src="images/pokelife.jpeg" alt=''
            />
            <div className="header__input">
                <SearchIcon/>
                <input placeholder='Search Friends' type={"text"}/>
            </div>
        </div>

        <div className='header__center'>
            <div className='header__option
            header__option--active'>
                <HomeIcon fontSize='large' />
            </div>
            <div className='header__option'>
                <FlagIcon fontSize='large' />
            </div>
            <div className='header__option'>
                <SubscriptionsIcon fontSize='large' />
            </div>
            <div className='header__option'>
                <LocalConvenienceStoreIcon fontSize='large' />
            </div>
            <div className='header__option'>
                <SupervisedUserCircleIcon fontSize='large' />
            </div> 
        </div>

        <div className='header__right'>
            <div className='header__info'>
                <Avatar />
                <h4>Sulav</h4>
            </div>
            <IconButton>
                 <AddIcon/>
            </IconButton>
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <IconButton>
                <NotificationsNoneIcon/>
            </IconButton>
            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default Header;
