import React from "react"

import Header from "./header"

export default ({ children }) => (
  <>
    <Header />
    <div>
      <main>{children}</main>
    </div>
  </>
)
