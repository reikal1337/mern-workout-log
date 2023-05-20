import { useEffect } from "react"
import { useState } from "react"

function WorkoutLogSets(props) {
    const [setsData,setSetsData] = useState({
        _id: props._id,
        reps: props.reps,
        weight: props.weight
    })

    useEffect(() => {
        const {_id, reps, weight} = setsData
        props.handleSetsChange(_id,reps,weight)
        
    },[setsData])
    
    const handleChange = (event) => {
        const {name, value} = event.target
        if(name === "reps") {
            if(value >= 0 && value <= 200){
                setSetsData( prevState =>({
                    ...prevState,
                    [name]: value
                }))
            }
        }else if(name === "weight") {
            if(value >= 0 && value <= 5000){
                setSetsData(prevState => ({
                    ...prevState,
                    [name]: value
                }))
            }
        }
    }

  return (
    <>
        <div className="sets-container">
            <label>Set {props.index+1}.</label>
            <label>Reps: <input type="number" disabled={props.submited} name="reps" value={setsData.reps} onChange={handleChange}/></label>
            <label>Weight: <input type="number" disabled={props.submited} name="weight" value={setsData.weight} onChange={handleChange}/> Kg</label>
        </div>
    </>
  )
}

export default WorkoutLogSets