import { useState } from "react";

export default function Form({ addContact, handleInput, formData }) {

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3001/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => addContact(data))
    }


    return (
      <div>
        <h2>Add a Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
          onChange={handleInput}
            type="text"
            name="fullName"
            required="required"
            placeholder="Enter a name..."
          />
          <input
          onChange={handleInput}
            type="text"
            name="cityState"
            required="required"
            placeholder="Enter your city & state..."
          />
          <input
          onChange={handleInput}
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="Enter a phone number..."
          />
          <input
          onChange={handleInput}
            type="email"
            name="email"
            required="required"
            placeholder="Enter an email..."
                />
                <button type="submit">Add</button>
        </form>
      </div>
    );
}