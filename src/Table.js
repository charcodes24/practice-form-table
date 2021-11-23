import { useEffect, useState } from "react";

import Form from "./Form";
import ReadOnlyRow from "./ReadOnlyRow";


export default function Table() {
    const [contacts, setContacts] = useState([])
    console.log("CONTACTS", contacts)

    useEffect(() => {
        fetch("http://localhost:3001/contacts")
            .then(res => res.json())
            .then(data => setContacts(data))
    }, []);


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
                {contacts.map((contact) => <ReadOnlyRow contact={contact} />
                )}
          </tbody>
            </table>
            <Form addContact={addContact}/>
      </div>
    );
}