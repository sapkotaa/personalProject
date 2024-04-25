import React from "react"
import {BrowserRouter as Router , Route, Switch} from "react-router-dom"
import {Header,Home} from "./Components"
import {Destination,Crew,Technology} from "./pages"


function App() {
  return(<>
  <Router>
    <Header/>
    <Switch>
      <Route path = "/" exact> 
       <Home/>
      </Route>
      <Route path = "/destination">
        <Destination/>
      </Route>
      <Route path="/crew">
        <Crew/>
      </Route>
      <Route path="/technology">
        <Technology/>
      </Route>
    </Switch>
  </Router>
  </>
  )
}

export default App



