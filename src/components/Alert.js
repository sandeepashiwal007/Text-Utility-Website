import React from "react";

export default function Alert(props) {
  return (
    <div style={{height:'60px'}}>
      {props.alert &&  <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
          <strong>{props.alert.typ} :</strong>{props.alert.msg}
        </div>}
    </div>
  );
}
