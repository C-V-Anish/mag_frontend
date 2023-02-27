import React from "react";
import { TextareaAutosize } from "@mui/material";
import './index.css';
import { Button } from "react-bootstrap";
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';

export default function Convert() {
  return (
    <div id="x">
    <div id="ta"></div>
    <TextareaAutosize
      minRows={12}
      style={{ width: "50%"}}
      id="ta1"
      />
      <div>
      <Button variant="warning" size="lg" display="block"><AutorenewOutlinedIcon/></Button>
      </div>
    </div>
  )
}
