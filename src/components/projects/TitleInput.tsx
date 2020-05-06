import React from "react"

export const TitleInput = (props: any) => {

    return (
        <input key={props._id}
               required
               type="text"
               placeholder="Title"/>
    )
};