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
    gap:'5px',
    // color:'#166bd3',
    fontWeight:'bold',
  },
  radio_selected:{
    display:'flex',
    gap:'5px',
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
  },
  inrtxt:{
    fontSize:'8px',
    lineHeight:'12px',
    width:'100%',
    overflow:'hidden'
  }
}))
const Flight = () => {
  const [ret,setRet]=useState(false);
  const [value,setvalue]=useState('one-way');
  const classes=useStyle();
  return (
    <div className={classes.cont}>
      <div className={classes.img}></div>
      <div className={classes.innerdiv}>
        <h2 className={classes.h2}>Book Domestic and International Flight Tickets</h2>
        <div className={classes.ticket}>
          <div>
            <div className={classes.radio_div}>
              <div className={value==='one-way'?classes.radio_selected:classes.radio}>
                <input type='radio' id='one-way' name='trip' value='one-way' checked={(value==='one-way')?'checked':''} onChange={()=>{setvalue('one-way')}}/>
                <label for='one-way'>One Way</label>
              </div>
              <div className={value==='round-trip'?classes.radio_selected:classes.radio}>
                <input type='radio' id='round-trip' name='trip' value='round-trip' checked={(value==='round-trip')?'checked':''} onChange={()=>{setvalue('round-trip')}}/>
                <label for='round-trip'>Round-trip</label>
              </div>
              <div className={value==='multi-city'?classes.radio_selected:classes.radio}>
                <input type='radio' id='multi-city' name='trip' value='multi-city' checked={(value==='multi-city')?'checked':''} onChange={()=>{setvalue('multi-city')}}/>
                <label for='multi-city'>Multi-city</label>
              </div>
            </div>
            <div className={classes.input}>
            <TextField
              id="outlined-required"
              label="From"
              variant="outlined"
            />
            <TextField
              id="outlined-required"
              label="To"
              variant="outlined"
            />
            <fieldset style={{border:'1px solid grey',borderRadius:'5px',width:'180px',height:'62px',position:'relative',top:'-8px',
          display:'flex',
          justifyContent:'center'
          }} 
          className={`border rounded-3 p-3 ${classes.fielddiv}`}
          >
              <legend style={{
                marginLeft:'10px',
                fontSize:'18px',
                position:'relative',
                left:'-20px'
              }}
              className="float-none w-auto px-3"
              >Departure</legend>
            <input className={classes.date} style={{border:'none',borderRadius:'10px',padding:'5px'}} type="date" name="date"></input>
            </fieldset>
            <fieldset 
            className={`border rounded-3 p-3 ${classes.fielddiv}`}
            style={{
              width:'150px',
              height:'43px',
              display:'flex',
              border:'1px solid grey',
              borderRadius:'5px',
              cursor:'pointer',
              padding:'5px',
              position:'relative',top:'-15px',
              paddingTop:'10px',
              paddingLeft:'10px',
            }}
            onClick={()=>{setRet(true)}}
            >
              <legend className="float-none w-auto px-3"
              style={{
                position:'relative',
                left:'-15px'
              }}
              >{ret?
              <div>
                <span style={{fontSize:'18px'}}>Added</span>
                <i 
                style={{
                  color:'green',
                  fontSize:'20px',
                  marginLeft:'5px',
                  marginRight:'5px',
                }}
                class="fa-solid fa-circle-check"></i>
              </div>
              :<span style={{fontSize:'18px'}}>Return</span>}</legend>
              <span className={classes.inrtxt} style={{fontSize:'12px',position:'relative',top:'-5px'}}>Click to add a return flight for better discounts</span>
            </fieldset>
            </div>
          </div>
        </div>
        <a className={classes.btn}>SEARCH FLIGHTS</a>
      </div>
    </div>
  )
}

export default Flight