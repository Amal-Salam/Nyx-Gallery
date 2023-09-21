import { useState } from 'react';
import { closestCenter, DndContext } from '@dnd-kit/core';
import {arrayMove,SortableContext,rectSwappingStrategy} from '@dnd-kit/sortable';
import Navbar from './Navbar'; 
import Image from './Image';
import imagesData from '../data.js'; 

const Gallery = () => {
     const [images, setImages] = useState(imagesData);
     const [searchTerm, setSearchTerm] = useState('');
  
  
  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setImages((images) => {
      const oldIndex = images.findIndex((image) => image.id === active.id);
      const newIndex = images.findIndex((image) => image.id === over.id);
      return arrayMove(images, oldIndex, newIndex);
    });
    
  };
  const filteredImages = images.filter((image) =>
      image.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  return (
    
    <div>
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <div className='container mt-4'>
          <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className='row'>
            <SortableContext items={images} strategy={rectSwappingStrategy}>
              {filteredImages.map((image) => (
                <Image key={image.id} image={image} />
              ))}
            </SortableContext>
          </div>
        </div>
      </DndContext>
    </div>
  );
};
export default Gallery;
