import React from 'react';
import './Model.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
const Model = ({closeModel,onSubmit,defualtValue,valueForView}) => {
    const [formState,setFormState]=useState(
        defualtValue ||valueForView || {
            Screen:"",
            Language:"",
            Key:"",
            Value:"",
        }
    );
    const [errors,setErrors]=useState("");
    const notify=()=>toast.success("Data Added Successfully!");
    const validateForm =()=>{
        if(formState.Screen && formState.Language && formState.Key && formState.Value){
            setErrors("");
            return true;
        }else{
            let errorFields =[];
            for(const[keyy,value] of Object.entries(formState)){
                if(value == null){
                    errorFields.push(keyy);
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    };
    // const handleScreenChange=(e)=>{
    //     setFormState({ 
    //         ...formState, 
    //         Screen:e.target.value,
    //     });
    // }
    // const handleKeyChange = (e)=>{
    //     setFormState({ 
    //         ...formState, 
    //         Key:e.target.value,
    //     });
    // };
    const handleChange = (e)=>{
        setFormState({ ...formState, [e.target.name]:e.target.value});
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!validateForm()) return;
        onSubmit(formState);
        notify();
        <ToastContainer />
        closeModel();
    };
    
  return (
    <div className='model-container'
        onClick={(e)=>{
            if(e.target.className==='model-container') closeModel();
            }}
        >
        <div className='model'>
            <form>
                <div className='form-group'>
                    <label htmlFor="Screen">Screen</label>
                    <input name="Screen" onChange={handleChange} value={formState.Screen}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="Language">Language</label>
                    <select name="Language"  onChange={handleChange}value={formState.Language}>
                        <option value="English">English</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Chineese">Chineese</option>
                        <option value="French">French</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Malayalam">Malayalam</option>
                        <option value="Kanada">Kanada</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="Key">Key</label>
                    <textarea name="Key" onChange={handleChange} value={formState.Key}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="Value">Value</label>
                    <textarea name="Value" onChange={handleChange} value={formState.Value}/>
                </div>
                {errors && <div className="error">{`Please include: ${errors}`}</div>} 
                <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
                <ToastContainer/>
            </form>
        </div>
    </div>
  );
};

export default Model
