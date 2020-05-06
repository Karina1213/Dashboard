import React from "react"

export const DeadlineInput = (props: any) => {

    return (
        <input key={props._id}
               required
               type="text"
               placeholder="Deadline"/>
    )
};