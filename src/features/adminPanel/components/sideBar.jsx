// admin panel side bar component

import React from 'react'

function sideBar() {
  return (
    <div className='sideBar'>
        <div className='sideBar__header'>
            <div className='sideBar__header__logo'>
                <img src='/images/logo.png' alt='logo' />
            </div>
            <div className='sideBar__header__title'>
                <h1>Admin Panel</h1>

            </div>
            <div className='sideBar__header__user'>
                <div className='sideBar__header__user__name'>
                    <h2>John Doe</h2>
                </div>
                <div className='sideBar__header__user__logout'>
                    <button>Logout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default sideBar