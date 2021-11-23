import { useEffect, useState } from "react";

import Form from "./Form";


export default function Table() {
    const [contacts, setContacts] = useState([])
    console.log("CONTACTS", contacts)

    useEffect(() => {
        fetch("http://localhost:3001/contacts")
            .then(res => res.json())
            .then(data => setContacts(data))
    }, []);

    const displayContacts = contacts.map((contact) => {
      return (
        <tr key={contact.id}>
          <td>{contact.fullName}</td>
          <td>{contact.cityState}</td>
          <td>{contact.phoneNumber}</td>
          <td>{contact.email}</td>
        </tr>
      );
    });

    function addContact(newContact) {
        const updatedContacts = [...contacts, newContact]
        setContacts(updatedContacts)
    }

    return (
      <div>
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
            {displayContacts}
          </tbody>
            </table>
            <Form addContact={addContact}/>
      </div>
    );
}