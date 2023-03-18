import mockData from "./mockWorkoutData"

function Workout() {
  return (
    <>
    <div>Workout</div>
    {mockData.map( object => {
            return <h3>{object.name}</h3>
        }
        )}
    </>
  )
}

export default Workout