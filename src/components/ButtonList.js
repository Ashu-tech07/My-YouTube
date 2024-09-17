import React from 'react'
import Button from './Button'

const list=['All','Movies','Music','Gaming','Cricket','Sports','Podcasts','Cooking','Live','Education'];

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((item,index)=>{
       return <Button key={index} name={item}/>
      })}
    </div>
  )
}

export default ButtonList
