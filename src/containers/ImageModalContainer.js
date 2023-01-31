import React from 'react';
import { useSelector } from 'react-redux';
import ImageModal from '../components/ImageModal';

function ImageModalContainer() {
  const modalVisible = useSelector(state => state.ImageModal.modalVisible)
  const bgColor = useSelector(state => state.ImageModal.bgColor)
  const src = useSelector(state => state.ImageModal.src)
  const alt = useSelector(state => state.ImageModal.alt)
  

  return (
    <ImageModal
      modalVisible={modalVisible}
      bgColor={bgColor}
      src={src}
      alt={alt}
    />
  );
}

export default ImageModalContainer;
