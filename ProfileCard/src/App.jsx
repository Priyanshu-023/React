import Profile from './Profile.jsx'

const people = [
  { id: 1, name: "Aman Singh", role: "Frontend Dev",  avatar: "https://i.pravatar.cc/150?img=1", skills: ["React", "CSS", "JavaScript"] },
  { id: 2, name: "Sarthak",    role: "Instructor",     avatar: "https://i.pravatar.cc/150?img=2", skills: ["React", "Node", "Teaching"] },
  { id: 3, name: "Aditya",     role: "Backend Dev",    avatar: "https://i.pravatar.cc/150?img=3", skills: ["Node", "MongoDB", "APIs"] },
  { id: 4, name: "Priya",      role: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?img=4", skills: ["Figma", "CSS", "Design"] },
  { id: 5, name: "Rahul",      role: "Full Stack Dev", avatar: "https://i.pravatar.cc/150?img=5", skills: ["React", "Node", "SQL"] },
]

function App() {
  return (
    <div className="profile-list">
      {people.map((person)=>(
        <Profile
         image={person.avatar}
         name ={person.name}
         role={person.role}
         skills={person.skills}
        /> 
      ))}
    </div>
  )
}

export default App