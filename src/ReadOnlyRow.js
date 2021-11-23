import React from 'react'

const ReadOnlyRow = ({ contact, handleEditClick }) => {
    const { id, fullName, cityState, phoneNumber, email } = contact

    return (
      <tr key={id}>
        <td>{fullName}</td>
        <td>{cityState}</td>
        <td>{phoneNumber}</td>
            <td>{email}</td>
            <td>
                <button type="button" onClick={(e) => handleEditClick(e, id)}>Edit</button>
            </td>
      </tr>
    );
}

export default ReadOnlyRow
