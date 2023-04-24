import React from 'react'
import myHOC from './hoc'

const InputComponent = (props) => {
    const { ele, data } = props
    if (ele === "input") {
        return (
            <div>
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <label>{item.label}</label>
                            <input type={item.type} value={item.value ? item.value : ""} name={item.name ? item.name : ""} />
                        </div>
                    )
                })}
            </div>
        )
    }
    if (ele === "select") {
        return (
            <div>
                <label>{data.label}</label>
                <select>
                    {data.value.map((item) => {
                        return (
                            <option key={item.id}>{item}</option>
                        )
                    })}
                </select>
            </div>
        )
    }

    return (
        <></>
    )
}

export default myHOC(InputComponent);