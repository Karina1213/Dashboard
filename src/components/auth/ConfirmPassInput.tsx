import React from "react"

export const ConfirmPassInput = (props: any) => {

    return (
        <input {...props}
               required
               className="input"
               placeholder="Confirmation password"/>
    )
};