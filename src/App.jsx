import { useState } from 'react';

import './App.css';
import Table from './components/Table';
import Model from './components/Model';
import { ToastContainer } from 'react-toastify';
function App() {
  const [modelOpen,setModelOpen]=useState(false);
  const [rows,setRows]=useState([
    { Screen:"Screen1",Language:"Telugu",Key:"PatientName",Value:"V1"},
    { Screen:"Screen2",Language:"Telugu",Key:"Adress",Value:"V2"},
    { Screen:"Screen1",Language:"English",Key:"PatientName",Value:"V1"},
    { Screen:"Screen1",Language:"Hindi",Key:"PatientName",Value:"V1"},
  ]);
  const [rowToView,setRowToView]=useState(null);
  const [rowToEdit,setRowToEdit]=useState(null);
  const handleDeleteRow=(targetIndex)=>{
    setRows(rows.filter((_,idx)=>idx !== targetIndex));
  };
  const handleViewRow=(idx)=>{
    setRowToView(idx);
    setModelOpen(true);
  };
  const handleEditRow=(idx)=>{
    setRowToEdit(idx);
    setModelOpen(true);
  };
  const handleSubmit=(newRow)=>{
    rowToEdit === null? setRows([...rows,newRow]): setRows(rows.map((currRow,idx)=>{
        if(idx !== rowToEdit) return currRow;
        return newRow;
      })
    );
  };
  return (
      <div className='App'>
        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} viewRow={handleViewRow}/>
        <button className='btn' onClick={()=>setModelOpen(true)}>Add</button>
        {modelOpen && (
        <Model 
          closeModel={()=>{
            setModelOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defualtValue={rowToEdit !== null && rows[rowToEdit]}
          valueForView={rowToView !== null && rows[rowToView]}
          />
          )}
          <ToastContainer/>
      </div>
  );
}

export default App;
