import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
    function onChangeTitle(event) {
        setTitleValue(event.target.value)
    }

    function onChangeDec(event) {
        setDesValue(event.target.value)
    }

    const [titleValue, setTitleValue] = useState("")
    const [desValue, setDesValue] = useState("")
    return (
        <div className="bg-success w-100 text-center px-4 pb-5">
            <h2 className='pt-3'><i className=''/> Add New Task</h2>
            <br/>
            <input type="text" className='w-50 border-2 rounded rounded-3 py-2'
                   name='titles' placeholder="title" value={titleValue} onChange={onChangeTitle}/>
            <br/> <br/>
            <textarea rows="4" className="w-50 border-2 " id='descriptions' placeholder="description"
                      value={desValue} onChange={onChangeDec}/>
            <br/> <br/>
            <a href='http://localhost:3000/list' className="btn btn-dark w-50 rounded-3 py-2"
               onClick={setDataInLocalStorage}> + Add</a>
        </div>
    )

    function setDataInLocalStorage() {
        let task = {title: titleValue, description: desValue}
        localStorage.setItem(localStorage.length + "", JSON.stringify(task))
    }
}

