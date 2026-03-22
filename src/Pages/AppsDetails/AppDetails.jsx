import React, { use, useState } from 'react'
import { useParams } from 'react-router'
import DetailsHeader from './DetailsHeader/DetailsHeader';
import DetailsChart from './DetailsChart/DetailsChart';
import scrollToTop from '../../utils/scrollToTop';

const appsPromise = fetch('/apps.json').then(res => res.json());

const AppDetails = () => {

    const { id } = useParams()
    const apps = use(appsPromise);
    
    const app = apps.find(app => app.id === Number(id));
   
scrollToTop();
  return (
    <div>
        <DetailsHeader app={app} />
        <DetailsChart app={app}/>
    </div>
  )
}

export default AppDetails


