
function WorkoutLogSets(props) {
    console.log(props)
  return (
    <>
        <div>Set: {props.index+1}</div>
        <label>Reps: <input type="number" name="reps" value={props.reps} /></label>
        <label>Weight: <input type="number" name="Weight" value={props.weight} /> Kg</label>
    </>
  )
}

export default WorkoutLogSets