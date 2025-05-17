
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


    const onSent =async(prompt) => {
      //  await main(input)
      setResponseData("");
      setLoading(true);
      setResponse(true);
      setRecentPrompt(input);
      const res = await main(input);
      setResponseData(res);
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