import React from "react"

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <nav>
                <a href="/">Home Page</a>
                <div> </div>
                <a href="/about">About Page</a>
            </nav>
            {children}
        </React.Fragment>
    )
}