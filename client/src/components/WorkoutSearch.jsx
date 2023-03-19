import { useState } from "react";
import { TbSearch } from "react-icons/tb"
import { SerachStyled } from "./styles/ExercisesSearch.style";

function WorkoutSearch(props) {
    const [search,setSearch] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        //Should validate first
        props.onSubmit(search)
        }
        
    const handleChange = (event) => {

        setSearch(prevState => prevState = event.target.value)
        }

  return (
    <SerachStyled onSubmit={handleSubmit}>
        <input name="field" maxLength="50" value={search.field} onChange={handleChange} placeholder="search..." />
        <button id="search-button" type="submit">{<TbSearch/>}</button>
    </SerachStyled>
  )
}

export default WorkoutSearch