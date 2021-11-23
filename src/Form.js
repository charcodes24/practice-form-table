import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        fullName: "",
        cityState: "",
        phoneNumber: "",
        email: ""
    })

    function handleInput(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }



    return (
      <div>
        <h2>Add a Contact</h2>
        <form>
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