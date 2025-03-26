import React, { useState } from 'react';

export default function TextUtils() {

const [text, setText] = useState("")
// to handle chage in react we use this 
const handleOnChange=(event)=>{
  setText(event.target.value)
}
// copy function
const Copy = async () => {
  if(text.trim()===""){
    alert("Enter text")
  }else{
    navigator.clipboard.writeText(text)
  }
};
// cut function
const Cut = async () => {
  if(text.trim()===""){
    alert("Enter text")
  }else{
    navigator.clipboard.writeText(text)
    setText("")
  }
};
// reset function
const Reset = () => {
    setText("")
};
// uppercase function
const UpperCase = () => {
  if(text.trim()===""){
    alert("Enter text")
  }else{
    let newText = text.toUpperCase()
    setText(newText)
  }
};
// lowercase function
const LowerCase = () => {
  if(text.trim()===""){
    alert("Enter text")
  }else{
    let newText = text.toLowerCase()
    setText(newText)
  }
};
// total words function
  const TotalWords = (text) => {
    return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  };
//  total sentences
const TotalSentences = (text) => {
  return text.trim() === "" ? 0 : text.trim().split(/[.!?]+/).filter((sentence) => sentence !== "").length;
};
// remove extra spaces
const RemoveSpace = () => {
  if(text.trim()===""){
    alert("Enter text")
  }else{
    setText(text.replace(/\s+/g, ' ').trim());
  } 
};
// btns data
const btns = [
    { title: "Copy", fun: Copy },
    { title: "Cut", fun: Cut },
    { title: "Reset", fun: Reset },
    { title: "Upper Case", fun: UpperCase },
    { title: "Lower Case", fun: LowerCase },
    { title: "Remove Space", fun: RemoveSpace }
];


  return (
    <div className="pb-10 pt-20  w-full h-full flex flex-col items-center justify-center bg-mywhite dark:bg-mydark transition-colors duration-300 px-4">
      
      <div className="text-center mb-6">
        <h1 className="text-mydark dark:text-mylight text-3xl font-bold font-myfont">TextUtils</h1>
        <p className="font-myfont text-mydark dark:text-mylight text-lg mt-2">Refine Your Words, Enhance Your Impact.</p>
      </div>

      <div className="w-full max-w-2xl">
        <textarea 
            id='textArea'
            value={text}
            rows={10} 
            className="w-full p-4  bg-mylight dark:bg-mydark focus:outline-none text-mydark dark:text-mylight  rounded-md shadow-upper dark:shadow-dupper  transition-all duration-300"
            onChange={handleOnChange}
            placeholder='Start typing here...'
        />
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {btns.map((btns, index) =>(
            <button 
            className='font-myfont bg-mylight shadow-Bupper active:shadow-Bact dark:bg-mydark dark:text-mylight dark:shadow-Bdupper dark:active:shadow-Bdact py-1 px-3  border-transparent rounded-xl transition-all duration-300 cursor-pointer mr-2'
            onClick={btns.fun}
            >{btns.title}</button>
        ))}
      </div>
      <div className="container mt-4  flex-row justify-center">
        <p className='font-myfont text-center text-mydark dark:text-mylight'>Total Words: {text.trim() === "" ? 0 : TotalWords(text)}</p>
        <p className='font-myfont text-center text-mydark dark:text-mylight'>Total Sentences: {text.trim() === "" ? 0 : TotalSentences(text)}</p>
      </div>
      
    </div>
  );
}
