import React, { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

const DropZone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle accepted files
    console.log(acceptedFiles);
  }, []);

  const onDropRejected = useCallback((rejectedFiles) => {
    // Handle rejected files
    console.log(rejectedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, onDropRejected, accept: 'image/*' });

  const dropzoneStyle = useMemo(
    () => ({
      borderColor: isDragAccept
        ? '#00e676'
        : isDragReject
        ? '#ff1744'
        : isDragActive
        ? '#2196f3'
        : '#eeeeee',
      borderStyle: 'dashed',
      borderWidth: '2px',
      borderRadius: '4px',
      padding: '1rem',
      textAlign: 'center',
    }),
    [isDragAccept, isDragReject, isDragActive]
  );

  return (
    <div {...getRootProps({ style: dropzoneStyle })}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default DropZone;