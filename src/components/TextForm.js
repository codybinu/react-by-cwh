import React from 'react'

export default function TextForm(props) {
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary"> Convert to UpperCase</button>
        </>

    )
}
