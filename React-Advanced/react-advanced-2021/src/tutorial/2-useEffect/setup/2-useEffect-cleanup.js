import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log('UseEffect!')
    window.addEventListener("resize", checkSize);
    return ()=>{
      console.log('CleanUP')
      window.removeEventListener("resize", checkSize);
    }
  });  
  console.log('Render')
  return (
    <>
      <h1>window</h1>
      <h2>{size}PX</h2>
    </>
  );
};

export default UseEffectCleanup;

//!! useEffect(() => {
//!!   setInterval(() => {console.log("hello")},1000)
//!! }, [])
//! В приведенном выше случае мы console.log 'hello' в интервале 1С. 
// !!то интервал будет работать даже после того, 
//! как компонент размонтируется, 
//! что приведет к утечке памяти в приложении. 
//! То же самое может произойти с таймерами, 
//! открытыми соединениями веб-сокетов.
//!Именно поэтому функция очистки должна быть 
// !предусмотрена для закрытия любой длительно работающей 
// !задачи или открытых ресурсов, чтобы закрыть их 
//! при размонтировании компонента.