import React from "react"

export const CostInput = (props: any) => {

    return (
        <input key={props._id}
               required
               type="text"
               name='cost'
               placeholder="Cost"
               value={props.cost}/>
    )
};