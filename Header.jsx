import React from 'react'
import {Link} from 'react-router-dom'

const Heading = () => {
  return (
    <>
     <Link style = {{marginLeft :"20px"}} to = {'/'}>Home</Link>
    <Link style = {{marginLeft :"20px"}} to = {'/objective'}>Objective</Link>
    <Link style = {{marginLeft :"20px"}} to = {'/skills'}>Skills</Link>
    <Link style = {{marginLeft :"20px"}} to = {'/education'}>Education</Link>
    <Link style = {{marginLeft :"20px"}} to = {'/achievement'}>Achievement</Link>
    <Link style = {{marginLeft :"20px"}} to = {'/counter'}>Counter</Link>
    </>
  )
}

export default Heading
