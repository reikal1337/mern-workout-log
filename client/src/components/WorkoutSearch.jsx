import { useState, useEffect } from "react";
import { SerachStyled } from "./styles/ExercisesSearch.style";

function WorkoutSearch(props) {
    const [search,setSearch] = useState("");
        useEffect(() => {
          props.onSubmit(search)
            
        },[search])
        
    const handleChange = (event) => {
        setSearch(prevState => prevState = event.target.value)
        }

  return (
    <SerachStyled >
        <input name="field" maxLength="50" value={search.field} onChange={handleChange} placeholder="Search..." />
    </SerachStyled>
  )
}

export default WorkoutSearch