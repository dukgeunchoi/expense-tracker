import React from 'react'
import './Sidebar.css'
import { MdDashboard, MdAttachMoney } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";



const Sidebar = () => {

  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Expense Tracker</span>

            <div className="profile">
                <img src="https://via.placeholder.com/150" alt="Profile" className="profileImg" />
                <span className="profileName">John Doe</span>
            </div>
            
            <div className="pageTitle">
                <div className="dashboard">
                  <MdDashboard className="icon" /> Dashboard
                </div>
                <div className="income">
                  <MdAttachMoney className="icon" /> Income
                </div>
                <div className="expense">
                  <FaMoneyBillTransfer className="icon" /> Expense
                </div>
            </div>
        </div>

        <div className="bottom">
            <div className="setting">
              <IoSettingsOutline className='icon' /> Setting
            </div>
        </div>
    </div>
  )
}

export default Sidebar