import React from 'react';
import {useSortable} from '@dnd-kit/sortable';


const Image = ({ image}) => {
  const { attributes, listeners, setNodeRef} =
    useSortable({ id: image.id });

  return (
    <div
     ref={setNodeRef}
      {...attributes}
      {...listeners}
      className='col-md-4 mb-4'
    >
      

      <div className='card'>
        <img src={image.url} alt={image.title} className='card-img-top card-img' />
        <div className='card-body'>
          <h5 className='card-title'>{image.title}</h5>
          <p className='card-text'>Tags: {image.tags.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default Image;





