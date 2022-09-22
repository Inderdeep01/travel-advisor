import { makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const useStyle=makeStyles(()=>({
  nav_list:{
    marginTop:'12px',
    display:'flex',
    flexDirection:'row',
    gap:'20px',
  },
  nav_item:{
    textDecoration:'none',
    padding:'10px',
      paddingLeft:'20px',
      paddingRight:'20px',
      borderRadius:'25px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'white',
      border:'2px solid #166bd3',
      cursor:'pointer',
    '&:hover':{
      backgroundColor:'#166bd3',
    },
    '&:hover $icon':
    {
      color:'white'
    },
    '&:hover $icon2':{
      color:'white'
    },
    '&:hover $btn_title':{
      color:'white'
    }
  },
  nav_item_selected:{
    textDecoration:'none',
    padding:'10px',
      paddingLeft:'20px',
      paddingRight:'20px',
      borderRadius:'25px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#166bd3',
      border:'2px solid #166bd3',
      cursor:'pointer',
  },
  icon:
  {
    color:'#166bd3',
    marginRight:'5px',
    transform:'rotate(-35deg)'
  },
  icon_selected:
  {
    color:'white',
    marginRight:'5px',
    transform:'rotate(-35deg)'
  },
  icon2:
  {
    color:'#166bd3',
    marginRight:'6px',
  },
  icon2_selected:
  {
    color:'white',
    marginRight:'6px',
  },
  btn_title:{
    color:'#166bd3',
    fontFamily:'20px'
  },
  btn_title_selected:{
    color:'white',
    fontFamily:'20px'
  },
  login:{
    backgroundColor:'gold',
    padding:'8px',
    paddingLeft:'30px',
    paddingRight:'30px',
    fontSize:'18px',
    fontWeight:'bold',
    borderRadius:'20px',
    cursor:'pointer',
    textDecoration:'none',
    color:'black',
    position:'absolute',
    right:'30px',
    '&:hover':{
      color:'black',
      backgroundColor:'#D4AF37',
    }
  },
}));
const Navbar = () => {
  const history=useNavigate();
  const classes=useStyle();
  const [selected,setSelected]=useState({});
  useEffect(()=>{
    const location=window.location.href;
    const arr=location.split('/');
    setSelected(arr[3]);
    // console.log(selected);
  });
  return (
    <div>
        <nav className="navbar navbar-light"
        style={{
            backgroundColor:'white',
            height:'70px',
            boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'
        }}
        >
        <div
        style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'flex-start',
          flexDirection:'row',
          gap:'30px',
          width:'100%',
        }}
        >
            <span style={{
              marginLeft:'35px',
              color:'rgb(250, 110, 12)',
              fontSize:'28px',
              fontWeight:'800',
              cursor:'pointer',
            }}
            onClick={()=>{history('/')}}
            >bon<span
            style={{
              color:'#166bd3'
            }}
            >voyage</span></span>

            <div
            className={classes.nav_list}
            >
              <a
              className={selected==='flights'?classes.nav_item_selected:classes.nav_item}
              onClick={()=>{history('/flights')}}
              >
              <i
              className={`fa-solid fa-plane ${selected==='flights'?classes.icon_selected:classes.icon}`}></i>
              <span
              className={selected==='flights'?classes.btn_title_selected:classes.btn_title}
              >Flights</span>
              </a>
              <a
              className={selected==='hotels'?classes.nav_item_selected:classes.nav_item}
              onClick={()=>{history('/hotels')}}
              >
              <i
              className={`fa-sharp fa-solid fa-hotel ${selected==='hotels'?classes.icon2_selected:classes.icon2}`}></i>
              <span
              className={selected==='hotels'?classes.btn_title_selected:classes.btn_title}
              >Hotels</span>
              </a>
            </div>
            <a className={classes.login}>Login</a>
        </div>
    </nav>
    </div>
  )
}

export default Navbar