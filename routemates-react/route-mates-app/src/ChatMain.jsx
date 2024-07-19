import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Chat from "./Chat";
import "./ChatMain.css";
const socket = io.connect("http://localhost:3001");

function ChatMain() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [userGroups, setUserGroups] = useState([]);

  
  const fetchUserGroups = (username) => {
    fetch(`http://localhost:8080/api/groups-by-member/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserGroups(data.groups);
      })
      .catch((error) => {
        console.error('Error fetching user groups:', error);
      });
  };
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      fetchUserGroups(storedUsername);
    }
  }, []);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="Main">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="Username"
            value={username}
            readOnly
          />
          <select onChange={(event) => setRoom(event.target.value)}>
            <option value="">Select a Room</option>
            {userGroups.map((group, index) => (
              <option key={index} value={group}>
                {group}
              </option>
            ))}
          </select>
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default ChatMain;
