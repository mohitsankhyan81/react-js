import React from 'react'
import Header from './Header'
import AllTask from './AllTask'

const CreateTask = () => {
  return (
     <div className='p-3 h-screen w-full'>
      <div className='p-4'>
        <form className='flex bg-[#1c1c1c] shadow-md p-6 rounded-xl gap-6'>

          <div className='w-1/2 space-y-4'>
            <div className='flex flex-col'>
              <h3 className='font-semibold mb-1'>Task Title</h3>
              <input type="text" placeholder='Add Task' className='border rounded-lg p-2 outline-none'/>
            </div>

            <div className='flex flex-col'>
              <h3 className='font-semibold mb-1'>Date</h3>
              <input type="date" className='border rounded-lg p-2 outline-none'/>
            </div>

            <div className='flex flex-col'>
              <h3 className='font-semibold mb-1'>Assign to</h3>
              <input type="text" placeholder='Employee Name' className='border rounded-lg p-2 outline-none'/>
            </div>

            <div className='flex flex-col'>
              <h3 className='font-semibold mb-1'>Category</h3>
              <input type="text" placeholder='design, dev, etc' className='border rounded-lg p-2 outline-none'/>
            </div>
          </div>
          
          <div className='w-1/2 flex flex-col space-y-4'>

            <div className='p-4 rounded-lg'>
              <h3 className='font-semibold text-white mb-1'>Description</h3>
              <textarea rows="6" className=' bg-black border rounded-lg p-2 outline-none resize-none w-full'></textarea>
            </div>

            <div className='p-4 rounded-lg'>
              <button className='bg-emerald-600 text-white px-5 py-2 rounded-lg w-full hover:bg-emerald-700 transition'>
                Create Task
              </button>
            </div>
          </div>
        </form>
        <AllTask/>
      </div>
    </div>
  )
}

export default CreateTask