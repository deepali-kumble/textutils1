import React from 'react'

export default function Alert(props) {
  const capitalize = (text) => {
    let newText = text[0].toUpperCase() + text.slice(1).toLowerCase()
    return newText
  }
  return (
    <div style={{height:'60px'}}>
      {props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
      </div>}
    </div>


  )
}
