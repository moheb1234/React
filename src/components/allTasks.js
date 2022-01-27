import Tasks from "./task";
import React from "react";

let values = []
let i = 0
export default function AllTasks() {
    while (i !== localStorage.length) {
        values.push(JSON.parse(localStorage.getItem(i + "")))
        i++
    }

    return (
        <div>
            {values.map((value) => {
                return <Tasks title={value.title} description={value.description}/>
            })}
        </div>
    )

}