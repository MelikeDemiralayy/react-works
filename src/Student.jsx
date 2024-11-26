import React from 'react'
import PropTypes from 'prop-types';

const Student = (props) => {
  return (
    <div className='student'>
      <p>Name: {props.name}</p>
      <p>Age:{props.age} </p>
      <p>Student:{props.isStudent ? "yes" : "no"} </p>
  

    </div>
  )
}
Student.propTypes={
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}
Student.defaultProps ={
  name: "ayse",
  age: 10,
  isStudent: true,
}
export default Student
