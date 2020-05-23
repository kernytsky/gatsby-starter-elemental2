import React, { useState } from "react"
import { Link } from "./utils"

const Button = props => {
    const { title, to, type, label } = props

    let innerComponents = (
        <React.Fragment>
            {props.iconLeft && (
                <span className="icon icon-left">{props.iconLeft}</span>
            )}
            <span>{props.title}</span>
            {props.iconRight && (
                <span className="icon icon-right">{props.iconRight}</span>
            )}
        </React.Fragment>
    )


    if(type) {
        const b = type.split(",");
        const t = b[1] ? b[1] : "button"
        if (b[0] === "button") {
            return <button type={t} className="btn btn-primary">{innerComponents}</button>
        }
    }
    return (
        <Link to={to} className="btn btn-primary" title={label || title}>
            {innerComponents}
        </Link>
    )
}

const TextInput = ({ label, type = "text", name }) => {
    const [focused, changeFocused] = useState(false)

    let elem = (
        <input
            type={type}
            name={name}
            className="block w-full outline-none px-4 py-2 focus:outline-none"
            onFocus={() => changeFocused(true)}
            onBlur={() => changeFocused(false)}
            aria-label={name}
        />
    )

    if (type === "textarea") {
        elem = (
            <textarea
                className="block w-full outline-none resize-none px-4 py-2 focus:outline-none"
                name={name}
                onChange={event => {
                    event.target.style.height = "auto"
                    event.target.style.height = event.target.scrollHeight + "px"
                }}
                onFocus={() => changeFocused(true)}
                onBlur={() => changeFocused(false)}
                aria-label={name}
            />
        )
    }

    return (
        <div
            className={`${
                focused ? "shadow-2xl" : ""
            } transition-shadow duration-300 py-3 lg:p-4 pb-6`}
        >
            <p className="text-color-3">{label}</p>
            <div className="bg-gradient-primary p-2px">
                {elem}
            </div>
        </div>
    )
}

export { Button, TextInput }
