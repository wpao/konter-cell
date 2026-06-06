import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input: React.FC<InputProps> = ({ label, error, className, id, ...props }) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} className={className} {...props} />
      {error && <span className="error">{error}</span>}
    </div>
  )
}
