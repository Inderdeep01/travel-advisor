import { makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
const useStyle=makeStyles((theme)=>({
  cont:{
    width:'100%',
    height:'90vh',
    display:'flex',
    justifyContent:'center',
  },
  img:{
    width:'100%',
    height:'400px',
    // border:'2px solid red',
    background:'url(../imgs/wave.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'100% 400px',
    position:'absolute',
  },
  innerdiv:{
    width:'100%',
    height:'100%',
    // border:'2px solid red',
    position:'absolute',
    display:'flex',
    flexDirection:'column',
    // justifyContent:'center',
    alignItems:'center',
    paddingTop:'25px',
    gap:'20px',
  },
  h2:{
    color:'white',
  },
  ticket:{
    width:'80vw',
    height:'300px',
    // border:'2px solid red',
    backgroundColor:'white',
    borderRadius:'35px',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
    padding:'20px',
  },
  btn:{
    backgroundColor:'rgb(255, 109, 56)',
    fontSize:'25px',
    textDecoration:'none',
    color:'white',
    padding:'15px',
    paddingLeft:'30px',
    paddingRight:'30px',
    fontWeight:'bold',
    borderRadius:'50px',
    position:'relative',
    top:'-50px',
    cursor:'pointer',
    transition:'all 1s',
    '&:hover':{
      backgroundColor:'rgb(255, 109, 56,0.7)',
      color:'white',
      transform:'scale(1.05)',
    }
  },
  radio_div:{
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
    marginBottom:'30px',
  },
  radio:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'rgb(22, 107, 211,0.2)',
    padding:'5px',
    paddingLeft:'10px',
    paddingRight:'10px',
    borderRadius:'20px',
    // color:'#166bd3',
    fontWeight:'bold',
  },
  radio_selected:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(22, 107, 211,0.2)',
    padding:'5px',
    paddingLeft:'10px',
    paddingRight:'10px',
    borderRadius:'20px',
    color:'#166bd3',
    fontWeight:'bold',
  },
  input:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    gap:'40px'
  },
  date:{
    '&:focus':{
      outline:'none'
    },
    position:'relative',
    top:'-10px'
  },
  fielddiv:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
}))
const Hotel = () => {
  const [value,setvalue]=useState('one-way');
/*   const [date,setDate]=useState(new Date());
  const onchange=()=>{

  } */
  const classes=useStyle();
  return (
    <div className={classes.cont}>
      <div className={classes.img}></div>
      <div className={classes.innerdiv}>
        <h2 className={classes.h2}>Book Domestic and International Hotels</h2>
        <div className={classes.ticket}>
          <div>
            <div className={classes.radio_div}>
              <div className={value==='Local'?classes.radio_selected:classes.radio}>
                <input type='radio' id='one-way' name='trip' value='one-way' checked={(value==='one-way')?'checked':''} onChange={()=>{setvalue('one-way')}}/>
                <label for='one-way'>Local</label>
              </div>
              <div className={value==='International'?classes.radio_selected:classes.radio}>
                <input type='radio' id='round-trip' name='trip' value='round-trip' checked={(value==='round-trip')?'checked':''} onChange={()=>{setvalue('round-trip')}}/>
                <label for='round-trip'>International</label>
              </div>
            </div>
            <div className={classes.input}>
            <TextField
              id="outlined-required"
              label="Destination"
              variant="outlined"
            />
            <TextField
              id="outlined-required"
              label="Guests"
              variant="outlined"
            />
            <fieldset className={`border rounded-3 p-3 ${classes.fielddiv}`} style={{border:'1px solid grey',borderRadius:'5px',width:'150px',height:'55px',position:'relative',top:'-7px',
          display:'flex',
          justifyContent:'center'
          }} >
              <legend 
              className="float-none w-auto px-3"
              style={{
                fontSize:'18px',
                marginLeft:'10px',
                position:'relative',
                left:'-20px'
              }}>Check-in</legend>
            <input className={classes.date} style={{border:'0px solid black',borderRadius:'10px',padding:'5px'}} type="date" name="date"></input>
            </fieldset>
            <fieldset 
            className={`border rounded-3 p-3 ${classes.fielddiv}`}
            style={{
              width:'150px',
              height:'45px',
              display:'flex',
              border:'1px solid grey',
              borderRadius:'5px',
              cursor:'pointer',
              padding:'5px',
              position:'relative',
              top:'-8px',
              display:'flex',
              justifyContent:'center'
            }}>
              <legend className="float-none w-auto px-3" style={{fontSize:'18px',position:'relative',
                left:'-15px'}}>Check-out</legend>
              <input className={classes.date} style={{border:'0px solid black',borderRadius:'10px',padding:'5px'}} type="date" name="date"></input>
            </fieldset>
            </div>
          </div>
        </div>
        <a className={classes.btn}>SEARCH HOTELS</a>
      </div>
    </div>
  )
}

export default Hotel