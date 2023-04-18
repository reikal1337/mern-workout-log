import { useState } from "react";
import { TbSearch } from "react-icons/tb"
import { SerachStyled } from "./styles/ExercisesSearch.style";

function ExercisesSearch(props) {

  const [search,setSearch] = useState({
    field: "",
    bodyPart: "all"
  });

  const handleSubmit = (event) => {
    event.preventDefault()
    //Should validate first
    props.onSubmit(search)
  }

  const handleChange = (event) => {
    
    setSearch({...search, [event.target.name]: event.target.value})
  }
    
  return (
    <SerachStyled onSubmit={handleSubmit}>
        <input name="field" maxLength="50"  value={search.field} onChange={handleChange} placeholder="Search..." />
        <select name="bodyPart" value={search.bodyPart} onChange={handleChange}>
          <option value="all">All</option>
          <option value="chest">Chest</option>
          <option value="back">Back</option>
          <option value="arms">Arms</option>
          <option value="abdominals">Abdominals</option>
          <option value="legs">Legs</option>
          <option value="shoulders">Shoulders</option>
        </select>
        <button id="search-button" type="submit">{<TbSearch/>}</button>
      </SerachStyled>
  )
}

export default ExercisesSearch