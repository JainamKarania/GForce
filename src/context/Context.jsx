
import { createContext, useState } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input , setInput] = useState("");
    const [recentPrompt , setRecentPrompt] = useState("");
    const [prevPrompts , setPrevPrompts] = useState([]);
    const [response , setResponse] = useState(false);
    const [loading , setLoading] = useState(false);
    const [responseData , setResponseData] = useState("");

    const delaypara = (index , nextword) => {
      setTimeout(function(){
        setResponseData(prev => prev + nextword);
      },75*index);
    }


    const onSent =async(prompt) => {
      //  await main(input)
      setResponseData("");
      setLoading(true);
      setResponse(true);
      let response;
      if (prompt !== undefined){
        response = await main(prompt);
        setRecentPrompt(prompt);
      }
      else {
        setPrevPrompts(prev => [...prev , input]);
        setRecentPrompt(input);
        response = await main(input);
      }
      setRecentPrompt(input);
      setPrevPrompts(prev => [...prev , input]);
      const res = await main(input);
      let responseArray = res.split("**");
      let newResponse="";
      for (let i =0; i < responseArray.length; i++){
        if (i==0 || i%2 !== 1) {
          newResponse += responseArray[i];
        }
        else {
          newResponse += "<b>"+responseArray[i]+"</b>";
        }
      }
      let newResponse2 = newResponse.split("*").join("<br/>");
      let newResponseArray = newResponse2.split(" ");
      for (let i = 0; i < newResponseArray.length; i++) {
        delaypara(i , newResponseArray[i] + " ");
      }
      // setResponseData(newResponse2);
      setLoading(false);
      setInput("");
    }
    
    // onSent("What is NextJS?")
    
    const contextValue = {
      prevPrompts,
      setPrevPrompts,
      onSent,
      setRecentPrompt,
      recentPrompt,
      response,
      loading,
      responseData,
      input,
      setInput,    
    };

    return (
        <Context.Provider value={contextValue}>
        {props.children}
        </Context.Provider>
    );
    }
export default ContextProvider;    