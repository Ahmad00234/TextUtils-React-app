import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase!","success");
  }
  const handleSearchReplace = () => {
    let newText = text.replace(new RegExp(searchTerm, 'g'), replaceTerm);
    setText(newText);
    props.showAlert("Text replace successfuly!","success");
 }
  const handleClearClick=()=>{
    let newText='';
    setText(newText)
    props.showAlert("Text cleared!","success");
}
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

   const handleSearch = () => {
    if (!searchTerms) {
      setHighlightedText(text);
      
      return;

    }
    const regex = new RegExp(searchTerms, 'gi');  // Case insensitive search
    const newText = text.replace(regex, (match) => `<mark>${match}</mark>`); // Wrap matches with <mark> for highlighting
    setHighlightedText(newText);
    props.showAlert("Search text","success");
  };
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clickboard!","success");
  }

 const handleExtraSpaces = () =>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed!","success");
 }
   

    const [text ,setText]=useState('');
    const [searchTerm, setSearchTerm] = useState('');
const [replaceTerm, setReplaceTerm] = useState('');
const [searchTerms, setSearchTerms] = useState('');
const [highlightedText, setHighlightedText] = useState('');
    //text="new text";//Wrong way to change the state
    //setText("new text");//Right way to change the state


  return (
    <>
    <div className='containers' style ={{color: props.mode==='dark'?'white':'#021628'}}>
      <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style ={{background: props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#021628'}} id="myBox" rows="8"></textarea>
   </div>
   <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
   <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Uppercase</button>
   <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
   <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
   <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Exrta Space</button>
   {/* <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> */}
   <input type="text" placeholder="Search term" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <input type="text" placeholder="Replace with" value={replaceTerm} onChange={(e) => setReplaceTerm(e.target.value)} />
      <button className="btn btn-primary mx-1" onClick={handleSearchReplace}>Search and Replace</button>
</div>
<div className='containers my-2'  style ={{color: props.mode==='dark'?'white':'#021628'}}>
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} Words and {text.length} Characters</p>
  <p>{0.008* text.split(" ").length} Minutes read</p>
</div>

<div className='container my-2' >
          <input
            type="text"
            placeholder="Search for text"
            value={searchTerms}
            onChange={(e) => setSearchTerms(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      <div className="containers my-2"  style ={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something in the text box above to priview it here"}</p>
        {/* Display highlighted text using dangerouslySetInnerHTML */}
        <p
          dangerouslySetInnerHTML={{
            __html: highlightedText || text,  // Default to original text if nothing is found
          }}
        />
      </div>
</>
  )
}
