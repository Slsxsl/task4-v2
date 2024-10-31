import React, { useState } from "react";
import './style.css';
import Header from './header';

const About = () => {
    // حالة لتخزين قائمة المهام
    const [list, setList] = useState([
        "Hello this is my first todo",
        "Hello this is my second todo",
        "Hello this is my 3rd Todo."
    ]);

    // حالة لتخزين النص المدخل
    const [inputText, setInputText] = useState("");

    // دالة لإضافة عنصر جديد
    const addItem = () => {
        if (inputText) {
            setList([...list, inputText]);
            setInputText(""); // مسح النص المدخل بعد الإضافة
        }
    };

    // دالة لحذف عنصر
    const removeItem = (index) => {
        const newList = list.filter((_, i) => i !== index);
        setList(newList);
    };

    return (
        <div>
            <header>
                <Header />
            </header>

            <div className="container">
                <div className="content">
                    <div className="main2">
                        <div className="paragraph">
                            <p>Simple ToDo App</p>
                            <span>This todo app is for test design</span>
                        </div>

                        <input 
                            id="input" 
                            placeholder="Write text here" 
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)} 
                        />
                        <button id="b1" onClick={addItem}>+ Add New</button>
                        <div className="line"></div>

                        <div id="list">
                            {list.map((el, i) => (
                                <div key={i} id="el">
                                    {el} 
                                    <button 
                                        onClick={() => removeItem(i)} 
                                        id="del"
                                    >
                                        x
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div id="total">
                            Total list: <span>{list.length}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="content">
                    <div className="footer">
                        <button id="b2" onClick={addItem}>+ Add New</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
