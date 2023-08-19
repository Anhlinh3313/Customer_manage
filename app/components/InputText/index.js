import React from 'react'
import styled from 'styled-components'

function InputText({ name, value, icon, placeholder, onChange, required = true, type = "text", isDisabled = false }) {
  return (
    <Wrapper className="flex items-center gap-3">
      {icon}
      <input disabled={isDisabled} value={value} type={type} name={name} onChange={onChange} required={required} placeholder={placeholder} className="c-input" />
    </Wrapper >
  )
}

export default InputText

const Wrapper = styled.div`
    position: relative;
    border-radius: 4px;
    width: 100%;
    padding: 0 8px;
    .c-input {
      padding: 10px 12px 10px 16px;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      border-radius: 30px;
      background: rgba(0, 0, 0, 0.05);
      width: 100%;
    }
`;