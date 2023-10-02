import React,{ useState }  from 'react';
import './App.css';
import uploader from "./images/uploader.png"


function App() {
  const [upload,setUpload] = useState<string>("")
  const inputt:any =document.querySelector('.ifield')

  const handleClick=()=>{
    inputt.click()(null)
  }

   function formSubmit(e: any) {
    e.preventDefault();
    console.log({upload})
   alert("here you'd submit the form using\n the filebase64 like any other field")
   }

  
  function convertFile(files: FileList|null) {
    if (files) {
      const fileRef = files[0] || ""
      const fileType: string= fileRef.type || ""
      console.log("This file upload is of type:",fileType)
      const reader = new FileReader()
      reader.readAsBinaryString(fileRef)
      reader.onload=(ev: any) => {
        // convert it to base64
        setUpload(`data:${fileType};base64,${btoa(ev.target.result)}`)
      }
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className='heading'>
        Upload cover image
        </div>
        <form onSubmit={formSubmit}
          onClick={handleClick}>
          
          <input type="file" onChange={(e)=> convertFile(e.target.files)} className='ifield'hidden/>
          <hr />

            
            { upload ?
            <img src={uploader} width={500} height={300}alt='img'/>
            : 
            <>
            <img src={uploader} alt='uploader'/>
            <p>browse file</p>
            </>
            }
<hr/>
            
            
   
          
        </form>
        <div className='buttons'>
        {<button> Submit and check the console</button>}          
  {<button>delete</button>}
  {<button>preview</button>}
</div>
      </header>
    </div>
  );
}

export default App;