import React, { useState, useEffect } from 'react';

function App() {

  const [list, setList] = useState([]);

    function addNewItem() {
        const newTask = document.getElementById("task").value;
        document.getElementById("task").value = "";

        if (newTask !== "") {
            setList((l) => [...l, newTask]);
        }
    }
    function deleteItem(index){
        const newList = list.filter((_, i) => i !== index);
        setList(newList);
    }

    useEffect(() => {
        const keyPressed = (e) => {
            if (e.key === 'Enter') {
                console.log('Enter key pressed!');
                addNewItem();
            }
        };

        window.addEventListener('keydown', keyPressed);

        return () => {
            window.removeEventListener('keydown', keyPressed);
        };

    }, []);

    return (
        <div className='bg-slate-300 w-screen h-screen flex flex-col items-center justify-center font-mono'>
            <h1 className='text-white text-6xl font-bold absolute top-8'>T0D0</h1>
            <div className='bg-gray-500 w-3/5 max-w-md rounded-2xl p-4'>
                <div className='h-10 bg-white rounded-2xl flex justify-between'>
                    <input id="task" type="text" placeholder='Enter a task' className='h-full w-4/5 rounded-l-2xl pl-8 pr-4 outline-none' />
                    <button className='h-full bg-gray-700 rounded-2xl px-8 text-slate-300' onClick={addNewItem}>Enter</button>
                </div>
                <ul>
                    {
                        list.map((item, index) =>
                            <li key={index} className='px-4 py-1 my-1 flex justify-between'>
                                <div className="flex">
                                    <input type="checkbox" className="peer mr-4 focus-none" />
                                    <h4 className="peer-checked:line-through peer-checked:italic peer-checked:text-slate-300" >{item}</h4>
                                </div>
                                <button onClick={() => deleteItem(index)} className="hover:bg-slate-300 rounded-full px-1.5" >✖</button>
                            </li>
                        )
                    }
                </ul>
                <div>
                </div>
            </div>
        </div>
    );
}

export default App
