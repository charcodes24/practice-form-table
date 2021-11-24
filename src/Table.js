import { useEffect, useState, Fragment } from "react";
import EditableRow from "./EditableRow";

import Form from "./Form";
import ReadOnlyRow from "./ReadOnlyRow";


export default function Table() {
    const [contacts, setContacts] = useState([])
    const [editContact, setEditContact] = useState(null)

    const [formData, setFormData] = useState({
      fullName: "",
      cityState: "",
      phoneNumber: "",
      email: "",
    });

    useEffect(() => {
        fetch("http://localhost:3001/contacts")
            .then(res => res.json())
            .then(data => setContacts(data))
    }, []);


    function addContact(newContact) {
        const updatedContacts = [...contacts, newContact]
        setContacts(updatedContacts)
    }

    function handleInput(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }

    function handleEditClick(e, id) {
        e.preventDefault()
        setEditContact(id)
    }

    return (
      <div>
        <form>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                            <th>Email</th>
                            <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContact === contact.id ? (
                          <EditableRow contact={contact} handleInput={handleInput}/>
                  ) : (
                    <ReadOnlyRow contact={contact} handleEditClick={handleEditClick}/>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
            <Form addContact={addContact} formData={formData} handleInput={handleInput}/>
      </div>
    );
}