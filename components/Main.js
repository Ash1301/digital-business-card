import React from "react"
import Button from "./Button"
export default function Main() {
    return (
        <div className="main-boby">
            <main>
                <h1 className="name">Ernst B. MARC</h1>
                <h3>Frontend Developer</h3>
                <h5>ernstbm93@gmail.com</h5>
                <Button />
                <h2 className="main-text-title about">About</h2>
                <p className="main-text">I'm an electronic engineer with an interest for full stack     developpement, for web3, etc. I am trying to learn a things from coding             everyday at scrimba. I want to keep learning coding from Web2 to Web3. I like       resolving problems, so with coding I want to give the bests results.</p>
                <h2 className="main-text-title">Interests</h2>
                <p className="main-text">Entrepreneur. Cryptopreneur. Music. Foods. Sports/soccer.      Swiming. Internet fanatic. Searcher. etc...</p> 
            </main>         
        </div>
    )
}
