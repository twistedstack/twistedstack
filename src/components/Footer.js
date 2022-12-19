import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Coded On Location
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. TwistedStack.
        </span>
      </div>
    </footer>
  </div>
)
