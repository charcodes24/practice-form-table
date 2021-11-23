import { useState } from "react";
import data from "./data.json"


export default function Table() {
    const [contacts, setContacts] = useState(data)
    console.log(contacts)

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
                {contacts.map((contact) => {
                    return (
                      <tr>
                        <td>{contact.fullName}</td>
                        <td>{contact.cityState}</td>
                        <td>{contact.phoneNumber}</td>
                        <td>{contact.email}</td>
                      </tr>
                    );
            })}
        </tbody>
      </table>
    );
}