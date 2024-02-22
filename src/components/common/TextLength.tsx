import React from 'react';

type TextLengthProps = {
    maxLength:number
    value:string
}

const TextLength = ({ maxLength, value }:TextLengthProps) => {

  return (
    <div className="flex justify-end">
      {' '}
      <span
        className={
          value.length < maxLength
            ? 'w-full text-end  text-xs'
            : ' w-full text-end  text-xs text-red-500'
        }
      >
        {value !== '' && value.length}/{maxLength}
      </span>
    </div>
  );
};

export default TextLength;