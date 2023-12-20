import React from 'react'
import './Table.css';
import {BsFillTrashFill} from "react-icons/bs";
import {BsFillPencilFill} from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import './Switch';
import { Switch } from './Switch';
import { ToastContainer } from 'react-toastify';

const Table = ({rows,deleteRow,editRow,viewRow}) => {
  return (
    <div className='table-wrapper'>
        <table className='table'>
            <thead className='head11'id='head1'>
                <tr className='row1'>
                    <th className='s1'>Screen</th>
                    <th className='l1'>Language</th>
                    <th className='k1'>Key</th>
                    <th className='v1'>Value</th>
                    <th className='s1'>Status</th>
                    <th className='a1'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row,idx)=>{
                        return <tr key={idx}>
                            <td>{row.Screen}</td>
                            <td className='l1'>{row.Language}</td>
                            <td className='k1'>{row.Key}</td>
                            <td className='l1'>{row.Value}</td>
                            <td className='s1'>
                               <Switch/>
                            </td>
                            <td className='fit'>
                            <span className='actions'>
                                <BsFillEyeFill 
                                className='view-btn'
                                onClick={()=>viewRow(idx)}/>
                                <BsFillPencilFill 
                                className='edit-btn' 
                                onClick={()=>editRow(idx)}
                                />
                                <BsFillTrashFill 
                                className='delete-btn'
                                onClick={()=>deleteRow(idx)}
                                />
                            </span>
                            </td>
                        </tr>
                        })
                }   
            </tbody>
        </table>
    </div>
  );
};

export default Table
