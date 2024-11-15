import type React from 'react'

interface ProfileProps {
    user: string
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
    return (
        <div className="product-card" role="article">
            <h2>Profile</h2>
            <h3>{user}</h3>
            
        </div>
    )
}

export default Profile