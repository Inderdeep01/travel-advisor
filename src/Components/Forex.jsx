import React from 'react'
import { useEffect ,useState} from 'react'

const Forex = () => {
  const [rate,setRate] = useState();
  useEffect(()=>{
    //console.log(date.now())
      axios.get('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response=>
          console.log(response)
      )
      .catch(err=>console.log(err))
  })
  
  return (
    <div></div>
  )
}


export default Forex