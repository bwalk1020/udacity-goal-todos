import React from 'react'

export default function List (props) {
  return (
    <ul>
      {props.items && props.items.map(
        (item) => (
          <li onClick={() => props.toggle && props.toggle(item)} key={item.id} style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
            <span>{item.name}</span>
            <button onClick={() => {props.remove(item)}}>
              X
            </button>
        </li>
        )
      )}
    </ul>
  )
}