import {useRef, useState} from 'react'
import BoxColor  from './BoxColor'

function MyForm() {
  const [value, setValue] = useState('')
  const inputRef= useRef(null)
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive']
    return (
    <>
    <input
    type='text'
    placeholder='Color'
    onChange={()=> setValue(inputRef.current.value)}
    value={value}
    ref={inputRef}
    />

    <div className='container'>
      {colors.map((color, index) => {
        return (<BoxColor key={index} color={color} value={value}/>)
      })}

    </div>
    </>
  );
}

export default MyForm;