const Popupcontent = ({copy}) => {
  return (
    <section>
      {copy && <div style={{position:"absolute" ,bottom:"3rem"}}>Copy to ClipBoard</div>}
    </section>
  )
}

export default Popupcontent