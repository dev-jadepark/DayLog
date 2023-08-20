import React from 'react';
import {createContext, useState} from 'react';

const LogContext = createContext(); //새로운 컨텍스트를 만들때 사용하는 메서드

function LogContextProvider({children}) {
  const [text, setText] = useState('');
  return (
    <LogContext.Provider value={{text, setText}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContextProvider;
