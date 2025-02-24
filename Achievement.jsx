import React from 'react'

const Achievement = (props) => {
  return (
    <div style={{backgroundColor : 'blue',color :'black'}}>{props.text.name}
        <h3 style = {{textAlign:'center'}}>Achievement</h3>
        <h4 style = {{textAlign:'left'}}>Co-author of the book "Programming on Java".<br/>
         Presented Research Project at the 9th & 10th Maharashtra State Inter-University Research Convention – "Avishkar-2014" & "Avishkar-2015".</h4>
    </div>
  )
}

export default Achievement
