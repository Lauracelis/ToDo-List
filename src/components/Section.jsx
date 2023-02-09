import React from 'react'


//Las Children son una forma de composición de componentes, donde, valga la redundancia, podemos pasar componentes a través de propiedades.
const Section = ({children}) => {
  return (
    <div style={{margin:"50px",}}>
      {children}
    </div>
  )
}

export default Section;
