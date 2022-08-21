import React from 'react'

const SelectedInfoBar = ({searchInput,name,type,dimension,residents}) => {
  return (
    <>
     <div className="number_location_title">
        <h2> Location # {searchInput}</h2>
       </div>
       <div className='selected_info_bar_container'>

    <ul className='list_style'>
      
        <li> <span>Name: </span> {name}</li>
        <li><span>Type: </span> {type}</li>
        <li><span>Dimension: </span>{dimension}</li>
        <li><span>Population: </span> {residents?.length}</li>
    </ul>

    </div>
    </>
    
  )
}

export default SelectedInfoBar