import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Description(){
    return(
        <div className="desc">
          <h4>Transform any scene into a unique musical experience with our AI powered scene-to-music generator.</h4>
          <Button variant="outlined" href="#outlined-buttons"><Link to='/convert' className="start-button">GET STARTED</Link></Button>
        </div>
    )
}