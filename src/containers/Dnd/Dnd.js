
import React, { useState } from 'react';
import styled from 'styled-components';

import defaultLogo from '../../assets/images/icon.svg';

const Dnd = ({ imgUrl, onChange }) => {
  const [dragging, setDrag] = useState(false);

  const dragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  const dragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDrag(true);
    }
  };

  const dragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target !== e.currentTarget) return false;
    setDrag(false);
  }

  const drop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      converImgToUrl(e);
      setDrag(false);
    }
  }

  const converImgToUrl = (e) => {
    const image = e.target.files ? e.target.files[0] : e.dataTransfer.items[0].getAsFile();
    if (!image || !(/\.(jpe?g|png|gif)$/i.test(image.name))) {
      alert ('File should be png, jpeg format');
      return false;
    } 
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (event) => {
      const image = new Image();
      image.src = event.target.result;
      image.onload = () => {
        if (image.height > 103 || image.width > 103) {
          alert ('Image should be 100px size');
          return false;
        }
        onChange(image.src);
      }
    }
  }
  
  return (
    <Wrapper imgUrl={imgUrl}>
      <div className={`dndContainer ${dragging ? "dragging" : ""}`}
        onDrop={e => drop(e)}
        onDragOver={e => dragOver(e)}
        onDragEnter={e => dragEnter(e)}  
        onDragLeave={e => dragLeave(e)}
      >
        <div className="dndContainer__content">
          <div className="logo">
            <img src={imgUrl ? imgUrl : defaultLogo} alt=""/>
          </div>
          <div className="desc">
            {imgUrl ? "Drag & drop here to replace" : "Drag & drop here"}
            <p>- or -</p>
          </div>
          <div className="btn">
            <label><input type="file" onChange={e => converImgToUrl(e)} />{imgUrl ? "Select  file to replace" : "Select  file to upload"}</label>
          </div>
        </div>
			</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px;
  .dndContainer {
    border: 1px solid transparent;
    display: flex;
    min-height: 470px;
    &.dragging {
        background-color: #F5F9FF;
        border: 1px dashed #4991E5;
    }
    &__content {
      margin: auto;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo {
        display: flex;
        border: 1px solid #D1E3F8;
        border-radius: 50%;
        margin-bottom: 9px;
        height: 80px;
        width: 80px;
        overflow: hidden;
        position: relative;
        img {
          display: block;
          margin: auto;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: ${({imgUrl}) => imgUrl ? '100%' : 'auto'};
        }
      }
      .desc {
        color: #324964;
         p {
          color: #6B85A3;
          text-align: center;
          margin: 8px 0 4px 0;
         }
      }
      .btn {
        input {
          width: 0;
	        height: 0;
        }
        label {
          cursor: pointer;
          color: #4991E5;
        }
      }
    }
  }
`

export default Dnd;