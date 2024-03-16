import { useEffect, useState } from "react";


function Pokemon(){
    const [records, setRecords] = useState([])

    useEffect(()=>{
        fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
        .then(response => response.json )
        .then(data => setRecords({records: data}))
        .catch(err => console.log(err))
    },[])

    return(
        <div>
            <ul>
                {records.map((list,index)=>(
                    <li key={index}>{list.id} {list.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pokemon;