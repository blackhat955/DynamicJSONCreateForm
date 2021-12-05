import React, { Component } from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import App from "./main";

class Router extends Component {
  state = {
    id :null,
  };

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<App/>}/>
          {
            this.state.id!==null? <Route path="/view" element={<App id={this.state.id}/>}/>: <Route path="/view" element={<Navigate to ="/not found" />}/>
          }
         
         
        </Routes>
      </div>
    );
  }
}

export default Router;
