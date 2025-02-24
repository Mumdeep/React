import React from 'react'

const Education = (props) => {
  return (
    <div style={{backgroundColor : 'red',color :'black'}}>{props.text.place}
      <h3 style = {{textAlign:'center'}}>Education</h3>
      <h4 style = {{textAlign:'left'}}>
      Master in Computer Science in Computer Science<br/>
Sardar Patel Mahavidyalaya • Chandrapur • GPA: 8.36/10 CGPA<br/>
Bachelor in Computer Science in Information Technology<br/>
Sardar Patel Mahavidyalaya • Chandrapur • GPA: 56%<br/></h4>
    </div>
  )
}

export default Education
