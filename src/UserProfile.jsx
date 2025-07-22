function UserProfile() {
  const name = "Sarah Johnson";
  const bio =
    "Full-stack developer passionate about creating user-friendly applications.";
  const profileImage =
    "https://plus.unsplash.com/premium_photo-1702552108421-57a57c4334a2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #e1e5e9",
          marginBottom: "16px",
        }}
      />
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{name}</h1>
      <p style={{ fontSize: "16px", color: "#555" }}>{bio}</p>
    </div>
  );
}

export default UserProfile;
