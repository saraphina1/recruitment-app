// function App() {
//     const [upload,setUpload] = useState<string>("")
  
//     function formSubmit(e: any) {
//       e.preventDefault();
//       // Submit your form with the filebase64 as 
//       // one of your fields
//       console.log({upload})
//       alert("here you'd submit the form using\n the filebase64 like any other field")
//     }
  
//     // The Magic all happens here.
//     function convertFile(files: FileList|null) {
//       if (files) {
//         const fileRef = files[0] || ""
//         const fileType: string= fileRef.type || ""
//         console.log("This file upload is of type:",fileType)
//         const reader = new FileReader()
//         reader.readAsBinaryString(fileRef)
//         reader.onload=(ev: any) => {
//           // convert it to base64
//           setUpload(`data:${fileType};base64,${btoa(ev.target.result)}`)
//         }
//       }
//     }
  
  
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div className='heading'>
//           Upload cover image
//           </div>
//           <form onSubmit={formSubmit}>
//             <input type="file" onChange={(e)=> convertFile(e.target.files)}/>
//             <hr />
//             { upload &&
//               <>
//               <p>
//                 It's ready to be submitted!<br />
//                 Simply include the 'filebase64' variable<br /> 
//                 as one of the things you submit</p>
              
            
//               {/* if it's an image */ }
//               {/* if it's an image */ }
//               {/* if it's an image */ }
//               {(upload.indexOf("image/") > -1) && 
//               <img src={upload} width={300} alt='img'/>
//               }
//   <hr />
//               <button> Submit and check the console</button>
              
//               </>
//             }
//           </form>
//         </header>
//       </div>
//     );
//   }
  