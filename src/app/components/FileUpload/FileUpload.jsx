import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./FileUpload.scss";
import upload from "./upload.png";
import PropTypes from "prop-types";
import { useEffect } from "react";

const FileUpload = (props) => {
  const { clear } = props;
  const wrapperRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFiles = e.target.files;
    if (newFiles.length) {
      const updatedList = [...files, ...newFiles];
      setFiles(updatedList);
    }
  };

  const removeImage = (image) => {
    const imageIndex = images.indexOf(image);
    const updatedFiles = [...files];
    updatedFiles.splice(imageIndex, 1);
    setFiles(updatedFiles);
  };

  useEffect(() => {
    props.onFileChange(files);

    const urls = files.map((file) => {
      return URL.createObjectURL(file);
    });
    setImages(urls);

    return () => {
      urls.forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [files]);

  useEffect(() => {
    if (clear) {
      setFiles([]);
    }
  }, [clear]);

  return (
    <div>
      <div
        className="file__upload"
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={ondragleave}
        onDrop={onDrop}
      >
        <div className="file__upload-label">
          <img src={upload} alt="" />
          <p>Click to Select or Drag & Drop your files here</p>
        </div>
        <input
          type="file"
          multiple="multiple"
          value=""
          onChange={onFileDrop}
          accept="image/*"
        />
      </div>

      {images.length > 0 && (
        <div className="file__upload-files">
          {images.map((image, i) => {
            return (
              <div className="file__upload-files-file" key={image + i}>
                <img src={image} className="file__upload-files-file--image" />
                <p
                  className="file__upload-files-file--remove"
                  onClick={() => removeImage(image)}
                >
                  X
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  onFileChange: PropTypes.func,
};

export default FileUpload;
