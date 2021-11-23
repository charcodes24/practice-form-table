import React from 'react'

const ReadOnlyRow = ({ contact }) => {
    const { id, fullName, cityState, phoneNumber, email } = contact
    
    return (
      <tr key={id}>
        <td>{fullName}</td>
        <td>{cityState}</td>
        <td>{phoneNumber}</td>
        <td>{email}</td>
      </tr>
    );
}

export default ReadOnlyRow
