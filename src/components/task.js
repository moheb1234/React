import React, {useState} from "react";


export default function Tasks({title, description}) {
    const [status, setStatus] = useState("Todo")

    function statusCode() {
        switch (status) {
            case 'Todo':
                setStatus('InProgress')
                break
            case 'InProgress':
                setStatus('InQA')
                break
            case 'InQA':
                setStatus('Done')
                break
            case 'Done':
                setStatus('Deployed')
                break
            case 'Deployed':
                setStatus('Todo')
                break
        }
    }

    return (
        <div className='py-5 px-5 bg-info mx-5 '>
            <div className='px-4 bg-light border-2 py-3 border border-4 border-secondary mx-5 my-4 '>
                <h2 className='row'>{title}</h2>
                <br/>
                <p>{description}</p>
                <br/><br/><br/>
                <div className='row ps-2'>
                    <button className='col btn btn-primary w-25 rounded-3 py-2' onClick={statusCode}>{status}</button>
                    <h2 className='col'><i className='bi-pencil btn btn-dark px-3 float-end'/></h2>
                </div>
            </div>
        </div>
    )
}