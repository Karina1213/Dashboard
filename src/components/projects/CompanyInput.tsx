import React from "react"

export const CompanyInput = (props: any) => {

    return (
        <input key={props._id}
               required
               type="text"
               name='company'
               placeholder="Company"/>
    )
};