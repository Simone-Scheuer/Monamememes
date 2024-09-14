import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/clown.jpeg" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Made by Mona</h4>
        </header>
    )
}