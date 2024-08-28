import Text "mo:base/Text";

// Main actor for the backend
actor {
  // TODO: Implement backend functionality
  public func greet(name : Text) : async Text {
    return "Hello, " # name # "! This is a placeholder greeting.";
  };
}