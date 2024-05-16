import React from 'react'
import WidgetLg from '../../components/witGet/WitGet';
import WidgetSm from '../../components/witSm/WitSm';
import Featured from '../../components/feature/Feature';
import ChartComponent from '../../components/chart/Chart';
import "./home.css"

const HomeAdmin = () => {
  return (
    <div className='home'>
        <Featured />
        <ChartComponent />
         <div class="homeWidgets">
       <WidgetSm />
       <WidgetLg />
      </div>
    </div>
  )
}

export default HomeAdmin ; 