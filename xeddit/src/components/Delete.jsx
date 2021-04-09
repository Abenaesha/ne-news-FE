import React from 'react';
import * as api from '../utils/api'

export default function Delete( {type, votes, id, removeFunc} ) {
  
  const removeItem = () => {
    api.deleteItem( type, id ).then( ( { status } ) => {
      if (status === 204) removeFunc(id)
    })
  }
  return (
    <section className='delete-btn'>
      <button onClick={removeItem}>
        DELETE {type}
      </button>
      <p>
        {votes < 0 ? (
          <p>UP</p>,
          <i className="fas fa-thumbs-down"></i>
        ) : (
            <p>DOWN</p>,
          <i className="fas fa-thumbs-up"></i>
        )}{" "}
        {votes}
      </p>
    </section>
  )
}
