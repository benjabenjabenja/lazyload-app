import React from 'react'
export interface UserProps {
    id: number | string;
}

export const User: React.FC<UserProps> = ({ id }) => {
    return (
        <h1>User page</h1>
    );
}
export default User
