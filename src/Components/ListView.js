import React from 'react'
import ListItem from './ListItem'

function ListView(props) {
   console.log('123', props.frameworks)
   if (!props.frameworks || props.frameworks.length < 1)
      return <div>Nothing</div>
   return props.frameworks.map(farmework => (
      <ListItem
         id={farmework.id}
         key={farmework.id}
         name={farmework.name}
         url={farmework.url}
         lead={farmework.lead}
         setFrameworks={props.setFrameworks}
      />
   ))
}

export default ListView
