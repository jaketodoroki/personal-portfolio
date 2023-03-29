import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { School } from '@mui/icons-material';
import { Restaurant } from '@mui/icons-material';


function Experience() {
  return (
    <div className='experience'> 
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2014 - 2019' 
          iconStyle={{background: '#3e497a', color: '#fff'}} 
          icon={<School />}
          >
            <h3 className='vertical-timeline-element-title'> 
              Montana State University
            </h3>
            <p> Completed course work in business management</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2019 - 2022' 
          iconStyle={{background: '#e9d35b', color: '#fff'}} 
          icon={<Restaurant />}
          >
            <h3 className='vertical-timeline-element-title'> 
              Ritz Carlton Avon, Colorado
            </h3>
            <p> Server and concierge. Provided high end dining and concierge service to guests in a busy and fast paced enviroment </p>
          </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Nov 2022 - Mar 2023' 
          iconStyle={{background: '#3e497a', color: '#fff'}} 
          icon={<School />}
          >
            <h3 className='vertical-timeline-element-title'> 
              General Assembly
            </h3>
            <p> Software Engineering Immersive remote program</p>
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience