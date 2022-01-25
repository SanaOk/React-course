import React, {useEffect, useState} from 'react';
import './App.css';
import ToDoList from "./components/ToDoList";
import Input from "./components/UI/Input";
import Button from "./components/UI/Button";
import InputSearch from "./components/UI/InputSearch";
import SortButtons from "./components/UI/SortButtons";
import {DataContext} from "./context";

function App() {
    const [items, setItems] = useState('');
    const [inputData, setInputData] = useState('');
    const [inputSearchData, setInputSearchData] = useState('');
    let filteredItems = items;

    useEffect(() => {
        function getItems() {
            const storageItems = localStorage.getItem('data');
            if (storageItems) {
                setItems(JSON.parse(storageItems));
            }
        }

        if (!items) {
            getItems();
        } else {
            const data = JSON.stringify(items);
            localStorage.setItem('data', data);
        }
    })

    if (inputSearchData) {
        filteredItems = items.filter((el) => {
            return el.inputData.includes(inputSearchData);
        })
    }

    return (
        <DataContext.Provider value={{items, setItems}}>
            <div className="App">
                <div className="App__name">ToDo</div>
                <form action=""
                      onSubmit={
                          (e) => {
                              e.preventDefault();
                              if (inputData) {
                                  setItems([...items, {inputData, isDone: false}]);
                                  setInputData('');
                              }
                          }}
                      className='form'>
                    <Input value={inputData} setInputData={setInputData}/>
                    <Button/>
                </form>
                <SortButtons/>
                <InputSearch setInputSearchData={setInputSearchData}/>
                <ToDoList
                    items={items}
                    filteredItems={filteredItems}
                />
            </div>
        </DataContext.Provider>
    );
}

export default App;
