import Principal "mo:core/Principal";
import Text "mo:core/Text";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Blob "mo:core/Blob";

actor {
  type Registration = {
    name : Text;
    mobile : Text;
  };

  type User = {
    id : Text;
    password : Text;
  };

  type Contact = {
    name : Text;
    email : Text;
    message : Text;
  };

  let registrations = List.empty<Registration>();
  let users = List.empty<User>();
  let contacts = List.empty<Contact>();

  // Allow user registration
  public shared ({ caller }) func register(name : Text, mobile : Text) : async () {
    let registration : Registration = {
      name;
      mobile;
    };
    registrations.add(registration);
  };

  // Allow user creation with password
  public shared ({ caller }) func createUser(id : Text, password : Text) : async () {
    let user : User = {
      id;
      password;
    };
    users.add(user);
  };

  // Simple login check
  public shared ({ caller }) func login(id : Text, password : Text) : async () {
    let userOpt = users.find(func(u) { u.id == id });
    switch (userOpt) {
      case (null) { Runtime.trap("User not found.") };
      case (?user) {
        if (user.password != password) { Runtime.trap("Incorrect password.") };
      };
    };
  };

  // Store contact form submission
  public shared ({ caller }) func submitContact(name : Text, email : Text, message : Text) : async () {
    let contact : Contact = {
      name;
      email;
      message;
    };
    contacts.add(contact);
  };
};
