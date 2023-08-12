import React from 'react'

function Contact() {
    const handleApiCall = () =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('api/items', requestOptions).then((resp)=>{
            console.log(resp);
        }).catch((err)=>{
            console.log(err);
        });
    }
  return (
    <div className="App">
    <header className="App-header">
      
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button    onClick={handleApiCall}>
        open api caller
      </button>
    </header>
  </div>
  )
}

export default Contact