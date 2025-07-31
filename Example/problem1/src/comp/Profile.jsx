import { useState } from "react"

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    age: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setProfile(prevprofile => ({
      ...prevprofile,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <label>Name: 
          <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </label>
      </div>
      <br></br>
      <div>
        <label>Age:
          <input type="text" name="age" value={profile.age} onChange={handleChange} />
        </label>
      </div>
      <h2>Profile Information</h2>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  )
}

export default Profile;
