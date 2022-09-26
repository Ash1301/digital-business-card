import React from "react"

export default function Button() {
    return (
        <div>
            <button type="button" id="email-btn"><img src="./images/email-icon.png"/>
                    <a href="mailto: ernstbm93@gmail.com" target="_blank" id="btn-email"> Email</a></button>
            
            
            <button id="linkedin-btn"><img src="./images/linkedIn-logo.webp" width="12px"/> 
                    <a href="https://www.linkedin.com/in/ernst-b-marc-466858174" target="_blank"> LinkedIn</a></button>
        </div>
    )
}

