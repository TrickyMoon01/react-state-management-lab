import { useState } from 'react';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  function handleAddFighter(fighter) {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id));
      setMoney(money - fighter.price);
      console.log("Team", [...team, fighter]);
    } else {
      console.log("Not enough money");
    }
  }

  function handleRemoveFighter(fighter) {
    setTeam(team.filter(f => f.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
  }

  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}> 
      <h2>Zombie Fighters</h2> 
      <div style={{
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#2d5a2d"
      }}>
        Money: ${money}
      </div>

      <div style={{ width: "100%", maxWidth: "1200px", marginBottom: "40px" }}>
        <h3>Your Team</h3>
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          <>
            <div style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "20px",
              backgroundColor: "#f0f0f0",
              padding: "10px",
              borderRadius: "8px",
              color: "#000000ff"
            }}>
              <div><strong>Total Strength: {totalStrength}</strong></div>
              <div><strong>Total Agility: {totalAgility}</strong></div>
            </div>
            <div style={{
              display: "flex", 
              flexWrap: "wrap", 
              gap: "20px", 
              justifyContent: "center"
            }}>
              {team.map((fighter) => (
                <div
                  key={fighter.id}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "10px",
                    width: "200px",
                    textAlign: "center",
                    backgroundColor: "#4f7d4f",
                  }}
                >
                  <img
                    src={fighter.img}
                    alt={fighter.name}
                    style={{
                      width: "100px", 
                      height: "100px"
                    }}
                  />
                  <h3>{fighter.name}</h3>
                  <p>Price: ${fighter.price}</p>
                  <p>Strength: {fighter.strength}</p>
                  <p>Agility: {fighter.agility}</p>
                  <button 
                    onClick={() => handleRemoveFighter(fighter)}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div style={{ width: "100%" }}>
        <h3>Available Fighters</h3>
        <div style={{
          display: "flex", 
          flexWrap: "wrap", 
          gap: "20px", 
          justifyContent: "center"
        }}>
          {zombieFighters.map((fighter) => (
            <div
              key={fighter.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                width: "200px",
                textAlign: "center",
                backgroundColor: "#7d4f4fff",
              }}
            >
              <img
                src={fighter.img}
                alt={fighter.name}
                style={{
                  width: "100px", 
                  height: "100px"
                }}
              />
              <h3>{fighter.name}</h3>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button 
                onClick={() => handleAddFighter(fighter)}
                disabled={money < fighter.price}
                style={{
                  padding: "8px 16px",
                  backgroundColor: money >= fighter.price ? "#4CAF50" : "#ccc",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: money >= fighter.price ? "pointer" : "not-allowed"
                }}
              >
                {money >= fighter.price ? "Add to Team" : "Can't Afford"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default App;