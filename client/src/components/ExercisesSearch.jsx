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
    props.onSubmit(search)
  }

  const handleChange = (event) => {
    const result = event.target.value.replace(/[^a-z\s0-9-]/gi, '')
    setSearch({...search, [event.target.name]: result})
  }
    
  return (
    <SerachStyled onSubmit={handleSubmit}>
        <input name="field" type="text" maxLength="50"  value={search.field} onChange={handleChange} placeholder="Search..." />
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