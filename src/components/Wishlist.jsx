import React from "react";
 const Wishlist=()=>{
    const [query,setQuery]=React.useState("");
    const [tasks,setTasks]=React.useState([]);
    const handleChange=(event)=>{ setQuery(event.target.value)}
   const AddtoList=()=>
   {
       const obj={
            names:query
        };
        if(tasks.length==3)
        {
            alert("You cannot add more than 3 items to wishlist")
            document.getElementById("Addbtn").style.display = "none"
            document.getElementById("input").style.display = "none"
        }
        else{
            let list=[...tasks,obj]
            setTasks(list)
        }
   }
   return(
        <>
            <h1>Wishlist</h1>
            <input type="text" id="input" placeholder="Enter Wishlist Name" onChange={handleChange} value={query}/>
            <button onClick={AddtoList} id="Addbtn">ADD</button>
            {     
                tasks.map(({names})=>{ return <div>{names}</div>})
            }
        </>
    )
 }
 export {Wishlist}