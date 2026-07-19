import React, { useState } from "react";
import { User, Mail, Phone, MapPin, LogOut } from "lucide-react";


export default function ProfilePage() {

    const [userName,setUserName] = useState([])
    // const [email,setEmail] = useState()
                                          
    // const fetchHandler = async()=>{
                                      
    //     try {
    //         const response = await fetch('http://localhost:5036/user/last-data')
                                                                                   
    //         if (!response.ok) {
    //             return console.log('error')
    //         }                              
    //         const data = await response.json()
    //         setName(data.name)
    //         setEmail(data.email)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }



    const fetchNameHandler = async()=> {
        try {
            const response = await fetch('http://localhost:5036/user/user-name')

            if(!response.ok) {
                return console.log('error')
            }
            const names = await response.json()
            setUserName(names)
        } catch (error) {
            console.log(error)
        }
    }


  return (

    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "30px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        }}
      >
        {/* Profile Picture */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              backgroundColor: "#4CAF50",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <User size={45} />
          </div>
        </div>

        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#333",
          }}
        >
          My Profile
        </h2>
        {/* <button onClick={fetchHandler}>Fetch Last Data</button> */}

        {/* User Details */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <User color="#4CAF50" />
            {/* <span>{UserName}</span> */}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Mail color="#4CAF50" />
            <span>email</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Phone color="#4CAF50" />
            <span>+91 9876543210</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <MapPin color="#4CAF50" />
            <span>New Delhi, India</span>
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            marginTop: "35px",
            display: "flex",
            gap: "15px",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#4CAF50",
              color: "white",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Edit Profile
          </button>

          <button
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#e53935",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <LogOut size={18} />
            Logout
          </button>
          <button onClick={fetchNameHandler}>fetchNames</button>
          <div style={{border:'1px solid black'}}>
            {userName.map(data=> {
                return <p>{data.name}</p>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}



