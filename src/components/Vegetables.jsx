import { useState } from "react";
import "../components/Vegetables.css"
function Vegetables()
{
  const [tomatoesValue,settomatoesValue]=useState(10);
  const [potatoesValue,setpotatoesValue]=useState(8);
  const [carrotsValue,setcarrotsValue]=useState(5);
  const [onionsValue,setonionsValue]=useState(7);


  
  
  let increase=(val,idea)=>{
      if(idea=="tomatoes")
      {
        settomatoesValue(tomatoesValue+val)
      }
      else if(idea=="potatoes")
      {
        setpotatoesValue(potatoesValue+val)
      }
      else if(idea=="carrots")
      {
        setcarrotsValue(carrotsValue+val)
      }
      else if(idea=="onions")
      {
        setonionsValue(onionsValue+val)
      }

  }

 let decrease=(val,idea)=>{
    if(idea=="tomatoes")
    {
    settomatoesValue(tomatoesValue-val)
    }
    else if(idea=="potatoes")
    {
        setpotatoesValue(potatoesValue+val)   
    }
    else if(idea=="carrots")
    {
      setcarrotsValue(carrotsValue+val)
    }
    else if(idea=="onions")
    {
      setonionsValue(onionsValue+val)
    }
  }

  

 

    return(
    
        <>
             
            <div>
                 <div className="flex">
                     <h1>tomatoes-</h1>
                     <h1>{tomatoesValue}</h1>
                 </div>
                 <div className="flex">
                    <button id="Increase" onClick={()=>increase(1,"tomatoes")}>+</button>
                    <button id="decrease" onClick={()=>decrease(1,"tomatoes")}>-</button>
                 </div>

                 <div className="flex">
                     <h1>potatoes-</h1>
                     <h1>{potatoesValue}</h1>
                 </div>
                 <div className="flex">
                    <button id="Increase" onClick={()=>increase(1,"potatoes")}>+</button>
                    <button id="decrease" onClick={()=>decrease(1,"potatoes")}>-</button>
                 </div>


                 <div className="flex">
                     <h1>carrots-</h1>
                     <h1>{carrotsValue}</h1>
                 </div>
                 <div className="flex">
                    <button id="Increase" onClick={()=>increase(1,"carrots")}>+</button>
                    <button id="decrease" onClick={()=>decrease(1,"carrots")}>-</button>
                 </div>

                 <div className="flex">
                     <h1>onions-</h1>
                     <h1>{onionsValue}</h1>
                 </div>
                 <div className="flex">
                    <button id="Increase" onClick={()=>increase(1,"onions")}>+</button>
                    <button id="decrease" onClick={()=>decrease(1,"onions")}>-</button>
                 </div>
               
            </div>
        </>
        
    );
 
}

export {Vegetables}