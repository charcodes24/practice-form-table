import React from 'react'

const EditableRow = ({ contact, handleInput }) => {
    const { fullName, cityState, phoneNumber, email } = contact
    
    return (
      <tr>
        <td>
          <input
          onChange={handleInput}
            type="text"
            required="required"
            placeholder={fullName}
            name="fullName"
          />
        </td>

        <td>
          <input
          onChange={handleInput}
            type="text"
            required="required"
            placeholder={cityState}
            name="cityState"
          />
        </td>
        <td>
          <input
          onChange={handleInput}
            type="text"
            required="required"
            placeholder={phoneNumber}
            name="phoneNumber"
          />
        </td>
        <td>
          <input
          onChange={handleInput}
            type="text"
            required="required"
            placeholder={email}
            name="email"
          />
        </td>
      </tr>
    );
}

export default EditableRow
