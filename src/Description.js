import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Description(){

    const navigate = useNavigate();
    function handleClick(){
      navigate('/convert')
    }
   
    return(
        <div className="desc">
          <p>Transform any scene into a unique musical experience with our AI powered scene-to-music generator.</p>
          <br/>
          <Button variant="contained" color="error" onClick={handleClick}>Get Started</Button>
        </div>  
    )
}