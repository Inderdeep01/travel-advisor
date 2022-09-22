import React from 'react'
import './Offers.scss'
import Offer from './Offer'
import { makeStyles } from '@material-ui/core'
const useStyles=makeStyles((theme)=>({
        home:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
          width:'100%',
          flexDirection:'row',
          flexWrap:'wrap',
          [theme.breakpoints.down("md")]:{
            flexDirection:'column',
          },
        }
}))

const Offers = () => {
        const classes=useStyles();
  return (
    <div 
    className={classes.home}
    id='offers'>
        <ul
        style={{
                display:'flex',
                justifyContent:'center',
        }}
        >
        <Offer link='https://www.gannett-cdn.com/presto/2019/06/23/USAT/c3a9f051-bd6c-4b39-b5b9-38244deec783-GettyImages-932651818.jpg?width=660&height=517&fit=crop&format=pjpg&auto=webp'
                subject="Internatioal Flights" detail="Save upto 15000 on flights to Canada and USA"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
        <Offer link='https://www.gannett-cdn.com/presto/2019/06/23/USAT/c3a9f051-bd6c-4b39-b5b9-38244deec783-GettyImages-932651818.jpg?width=660&height=517&fit=crop&format=pjpg&auto=webp'
                subject="Internatioal Flights" detail="Save upto 15000 on flights to Canada and USA"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
        <Offer link='https://www.gannett-cdn.com/presto/2019/06/23/USAT/c3a9f051-bd6c-4b39-b5b9-38244deec783-GettyImages-932651818.jpg?width=660&height=517&fit=crop&format=pjpg&auto=webp'
                subject="Internatioal Flights" detail="Save upto 15000 on flights to Canada and USA"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
        <Offer link='https://www.gannett-cdn.com/presto/2019/06/23/USAT/c3a9f051-bd6c-4b39-b5b9-38244deec783-GettyImages-932651818.jpg?width=660&height=517&fit=crop&format=pjpg&auto=webp'
                subject="Internatioal Flights" detail="Save upto 15000 on flights to Canada and USA"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
        <Offer link='https://www.gannett-cdn.com/presto/2019/06/23/USAT/c3a9f051-bd6c-4b39-b5b9-38244deec783-GettyImages-932651818.jpg?width=660&height=517&fit=crop&format=pjpg&auto=webp'
                subject="Internatioal Flights" detail="Save upto 15000 on flights to Canada and USA"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
        <Offer link='https://www.gannett-cdn.com/presto/2019/06/23/USAT/c3a9f051-bd6c-4b39-b5b9-38244deec783-GettyImages-932651818.jpg?width=660&height=517&fit=crop&format=pjpg&auto=webp'
                subject="Internatioal Flights" detail="Save upto 15000 on flights to Canada and USA"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
        <Offer link='https://www.gannett-cdn.com/presto/2019/06/23/USAT/c3a9f051-bd6c-4b39-b5b9-38244deec783-GettyImages-932651818.jpg?width=660&height=517&fit=crop&format=pjpg&auto=webp'
                subject="Internatioal Flights" detail="Save upto 15000 on flights to Canada and USA"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
        <Offer link='https://www.gannett-cdn.com/presto/2019/06/23/USAT/c3a9f051-bd6c-4b39-b5b9-38244deec783-GettyImages-932651818.jpg?width=660&height=517&fit=crop&format=pjpg&auto=webp'
                subject="Internatioal Flights" detail="Save upto 15000 on flights to Canada and USA"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
    </ul>
    </div>
  )
}

export default Offers