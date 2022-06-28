import React from 'react';
import"./StoryReel.css";
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        image="images/Teacher.jpeg" 
        profileSrc="images/readium.jpeg"
        title="RADIUM"
      />
      <Story
        image="images/uni.jpeg" 
        profileSrc="images/sakshampp.jpeg"
        title="SAKSHAM"
      />
      <Story
        image="images/Teacher.jpeg" 
        profileSrc="images/shistina.jpeg"
        title="SHISTINA"
      />
      <Story
        image="images/Teacher.jpeg" 
        profileSrc="images/elon.jpeg"
        title="KESIKA"
      />
      <Story
        image="images/Teacher.jpeg" 
        profileSrc="images/elon.jpeg"
        title="ALEX"
      />

    </div>

  );
  
}

export default StoryReel;
