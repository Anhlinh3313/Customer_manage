import React, { useState } from 'react'
import styled from 'styled-components'
import { SlEye } from 'react-icons/sl'
import { RxEyeClosed } from 'react-icons/rx'
function InputPassword({name, icon, placeholder, onChange, required = true, ...other}) {
  const [showEye, setShowEye] = useState(true);

  const toggleShow = () => {
    setShowEye(!showEye);
  }
  return (
    <Wrapper className="flex items-center gap-3">
      {icon}
      <input {...other} type={showEye? "text" : "password" } name={name} onChange={onChange} required={required} placeholder={placeholder} className="c-input" />
      {showEye?
        <SlEye className="text-xl" onClick={toggleShow} />
      : <RxEyeClosed className="text-xl" onClick={toggleShow} />
    }
  
    </Wrapper>
  )
}

export default InputPassword

const Wrapper = styled.div`
  position: relative;
  border-radius: 4px;
  width: 100%;
  padding: 0 8px;
  padding-top: 20px;
  .c-input {
    padding: 10px 12px 10px 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.05);
    width: 100%;
    margin-right: -35px;
  }
`;