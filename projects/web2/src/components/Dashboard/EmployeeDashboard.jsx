import React from 'react'

import Header from '../other/Header'
import TaskCount from '../other/TaskCount'
import TaskList from '../Tasklist/TaskList'
const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header/>
      <TaskCount/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard