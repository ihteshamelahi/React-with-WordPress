import React, { useContext } from "react";
import UserContext from "../context/UserContext";
function ContactInfo() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Pending Contact Info</div>;

  return <div>Phone {user.phone}</div>;
}

export default ContactInfo;
