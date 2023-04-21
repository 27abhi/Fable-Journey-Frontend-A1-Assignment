import React from 'react';
import './App.css';

export default function Field(props) {
    let element;
    let origLength=props.length;
    
    if(Number.isInteger((Math.log(props.id+1)/(Math.log(2))))){
        element=(
        <span className='element'>
            <button id={props.id} onClick={(e)=>{HandleGlow(e)}}>{props.number}</button><br /><br /><br />  
        </span>
        
        )
    }
    else{
        element=(
        <span  className="element">
            <button id={props.id} onClick={(e)=>HandleGlow(e)}>{props.number}</button>
               
        </span>
        
        )
    }


    const HandleGlow =(e) =>{ 
        let arr=[];
        let parent;
        let id=e.target.id;   

        const FindParent=(id)=>{
            if(id%2==0){
                parent=id/2;
                arr.push(parent);
                if(parent!=1){
                    FindParent(parent);
                }
            }
            else{
                parent=(id-1)/2;
                arr.push(parent);
                if(parent!=1){
                    FindParent(parent);
                }
            }
        } 
        FindParent(id);
        console.log(arr);

        const MakeGlow=(arr)=>{
            for (let i = 1; i <= origLength; i++) {
                document.getElementById(i).style.backgroundColor='';
            }

            for (let i = 0; i < arr.length; i++) {
                document.getElementById(arr[i]).style.backgroundColor='green';
            }
        }
        MakeGlow(arr);
    }

    return(
        <> 
        {element}
          
        </>
    );
}