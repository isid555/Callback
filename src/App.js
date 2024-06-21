import logo from './logo.svg';
import './App.css';
import {useCallback, useState} from "react";

function App(){
const[input , setInput] = useState('');
const [count , setCount] = useState(0);
const incrementCount = useCallback(()=>{setCount(count + 1)}, [count]);
}



const ChildComponent  = React.memo(function ({count,onclick}){
    
})

export default App;
