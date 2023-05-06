import React from "react"
import store from "./store.js"
export default class IssueAbout extends React.Component {
    constructor(){
        super()
    }
    render(){
        console.log("issue about"+store.inital)
        return(
        <div className="text-center" >
            {JSON.stringify(store.inital)?<h1>{JSON.stringify(store.inital.about)}</h1>:<h1>Error</h1>}
        </div>)
    }
}