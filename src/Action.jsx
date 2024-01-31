import React from 'react'

const increment ="INCREMENT"
const decrement="DECREMENT"

export function incrementNumber(){
    return{
        type: increment
}
}
export function decrementNumber(){
    return{
        type: decrement
}
}