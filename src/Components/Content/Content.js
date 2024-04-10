
import React from 'react'

const Content = (props) => {
    document.title = 'Rent Vehicle Service -' + props.title
  return (
    <div className="w-100">
      {props.children}
    </div>
  )
};

export default Content
