import React, { Component } from "react";
import Swal from "sweetalert2";
import "./input.css";
class Button extends Component {
  state = {};

  handelButtonOnClick = () => {
    console.log(window.location.href);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Link Copied",
      showConfirmButton: false,
      timer: 1500,
    });
    const finalLink = window.location.href + "view";
    navigator.clipboard.writeText(finalLink);
    return;
  };
  render() {
    const { id } = this.props;
    return (
      <div>
        <button value="submit">Do Confirmation</button>
        {
          id==null?<button value="SendToClient" onClick={this.handelButtonOnClick}>
    
          Send To Client
          </button>:null
        }
      </div>
    );
  }
}

export default Button;
