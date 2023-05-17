import { useState } from "react"

function WorkoutLogSets(props) {
    const [setsData,setSetsData] = useState({
        _id: props._id,
        reps: props.reps,
        weight: props.weight
    })
    
    const handleChange = (event) => {
        const {name, value} = event.target
        if(name === "reps") {
            if(value >= 0 && value <= 200){
                setSetsData({
                    ...setsData,
                    [name]: value
                })
            }
        }else if(name === "weight") {
            if(value >= 0 && value <= 5000){
                setSetsData({
                ...setsData,
                [name]: value
                })
            }
        }
        props.handleSetsChange(setsData)

    }

  return (
    <>
        <div className="sets-container">
            <label>Set {props.index+1}.</label>
            <label>Reps: <input type="number" name="reps" value={setsData.reps} onChange={handleChange}/></label>
            <label>Weight: <input type="number" name="weight" value={setsData.weight} onChange={handleChange}/> Kg</label>
        </div>
    </>
  )
}

export default WorkoutLogSets