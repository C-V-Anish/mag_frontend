import React from "react";
import { Outlet } from "react-router-dom";
import { TextareaAutosize } from "@mui/material";

const Convert = () => {
    return(<div>
            <TextareaAutosize
              rowsMin={10}
              placeholder='Input the Script'
              minRows={20}
              style={{ width: "40%"}}
              />
    </div>)
}

export default Convert;