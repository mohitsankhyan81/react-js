import React from 'react'

const App = () => {
  return (
    <div className="fab">
  {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
  <div tabIndex={0} role="button" className="btn btn-lg btn-circle btn-success">F</div>

  {/* buttons that show up when FAB is open */}
  <div>Label B <button className="btn btn-lg btn-circle">A</button></div>
  <div>Label C <button className="btn btn-lg btn-circle">B</button></div>
  <div>Label D <button className="btn btn-lg btn-circle">C</button></div>
</div>

  )
}

export default App