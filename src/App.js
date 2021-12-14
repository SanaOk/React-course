import React, {useState} from 'react';
import './App.css';
import ColorItem from "./components/ColorItem";

export default function App() {
    const colors =
        [
            {'hex': '#9253a1', 'rgb': '(146,83,161)'},
            {'hex': '#f063a4', 'rgb': '(240,99,164)'},
            {'hex': '#2dc5f4', 'rgb': '(45,197,244)'},
            {'hex': '#fcee21', 'rgb': '(252,238,33)'},
            {'hex': '#f16164', 'rgb': '(241,97,100)'},
            {'hex': '#70327e', 'rgb': '(112,50,126)'},
            {'hex': '#a42953', 'rgb': '(164,41,99)'},
            {'hex': '#0b6a88', 'rgb': '(11,106,136)'},
            {'hex': '#f89e4f', 'rgb': '(11,106,136)'},
            {'hex': '#ec015a', 'rgb': '(236,1,90)'}
        ];

    const [activeColor, setActiveColor] = useState('#9253a1');
    const [copied, setCopied] = useState('');

    return (
        <div className="App">
            <div className='color-board' style={{'backgroundColor': activeColor}}>
                <div className="color-copied">{copied ? 'Copied: ' + copied : ''}</div>
                <div className='color-items'>
                    {colors.map((el, i) => {
                        return <ColorItem
                            hex={el.hex}
                            rgb={el.rgb}
                            setActiveColor={setActiveColor}
                            activeColor={activeColor}
                            key={Date() + i}
                            id={i}
                            setCopied={setCopied}
                        />
                    })
                    }
                </div>
            </div>
        </div>
    );
}