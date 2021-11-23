import { useEffect, useState } from "react";

import Form from "./Form";


export default function Table() {
    const [contacts, setContacts] = useState([])
    console.log(contacts)

    useEffect(() => {
        fetch("http://localhost:3001/contacts")
            .then(res => res.json())
            .then(data => setContacts(data))
    }, []);

    function handleSubmit(formData) {
        setContacts(...contacts, formData)
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
            <Form handleSubmit={handleSubmit}/>
      </div>
    );
}