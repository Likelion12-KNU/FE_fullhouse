import React from 'react';
import '../../style/Profile.css'

function Profile() {
    return (
        <div className='proroot'>
        <div className='profileCover'>
            <div className='profile'>
                <img className='profileimg'/>
                <div className='textcover'>
                <h1 className='profileName'>남궁수민</h1>
                <p className='profileContents'>aaaaaaaa</p>
                </div>
            </div>
            <div className='profile'>
                <img className='profileimg'/>
                <div className='textcover'>
                <h1 className='profileName'>안채연</h1>
                <p className='profileContents'>aaaaaaa</p>
                </div>
            </div>
            <br/>
            <div className='profile'>
                <img className='profileimg'/>
                <div className='textcover'>
                <h1 className='profileName'>이정호</h1>
                <p className='profileContents'>aaaaaaaa</p>
                </div>
            </div>
            <div className='profile'>
                <img className='profileimg'/>
                <div className='textcover'>
                <h1 className='profileName'>이현조</h1>
                <p className='profileContents'>aaaaaaaa</p>
                </div>
            </div>
            <br/>
            <div className='profile'>
                <img className='profileimg'/>
                <div className='textcover'>
                <h1 className='profileName'>최건우</h1>
                <p className='profileContents'>aaaaaaaaa</p>
                </div>
            </div>
            <div className='profile'>
                <img className='profileimg'/>
                <div className='textcover'>
                <h1 className='profileName'>최건우</h1>
                <p className='profileContents'></p>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Profile