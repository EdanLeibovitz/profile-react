import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact inner-container margin-tb">
        <h2>צור קשר</h2>
        <form>
          <div>
            <input type="text" name="name" placeholder="השם שלך" />
            <input type="text" name="phone" placeholder="מספר הטלפון שלך" />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="ההודעה שלך"
          />
          <button>שלח</button>
        </form>
      </div>
    );
  }
}
