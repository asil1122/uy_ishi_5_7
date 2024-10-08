import React from 'react'
import style from "./input.module.scss"


export const Input = ({variant,plac,type,size, name, register,errors}) => {

  return (
    <>
    <input className={`${style[variant]} ${style[size]} input`} {...register(name, { required: true})}  type={type} placeholder={plac} />

    </>
)
}
