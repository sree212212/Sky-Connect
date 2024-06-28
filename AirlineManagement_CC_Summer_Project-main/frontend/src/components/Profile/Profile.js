import React, { useState, useEffect } from 'react';
import './profile.css';
import jwt_decode from 'jwt-decode';

export default function Profile({ history }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = sessionStorage.getItem('authToken');
        if (token) {
            try {
                const decoded = jwt_decode(token);
                if (decoded) {
                    setUser(decoded);
                } else {
                    console.error('Invalid token structure');
                }
            } catch (error) {
                console.error('Failed to decode token:', error);
            }
        } else {
            console.error('No token found');
        }
    }, []);

    const goBackToRoutes = (e) => {
        e.preventDefault();
        history.push('/routes');
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className='profile-container'>
            <div className='profile-card'>
                <div className='profile-header'>
                    <h1 className='profile-heading'>{'John Doe' || user.name}</h1>
                    <p className='profile-email'>{user.email || 'example@example.com'}</p>
                    <p className='profile-phone'>{user.phone || '+1234567890'}</p>
                </div>
                <div className='loyalty-status'>
                    <h2>Loyalty Program Status</h2>
                    <p className='status'>Gold Member</p>
                </div>

                <div className='profile-actions'>
                    <button className='btn btn-back' onClick={goBackToRoutes}>
                        GO BACK
                    </button>
                </div>
            </div>
        </div>
    );
}
