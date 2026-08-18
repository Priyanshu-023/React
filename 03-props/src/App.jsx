import Card from './Card.jsx'

function App() {
  return (
    <div className="card-container">
     <Card user="Priyanshu" info="Software Engineer" img="https://imgs.search.brave.com/xsfeS3qtLfgNSmnJmlXZ__Jk4Ll4QmDB3axnzDerUy8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YmVpbmdodW1hbmNs/b3RoaW5nLmNvbS9j/ZG4vc2hvcC9maWxl/cy9CSE1TUzI1NjU4/LUJST1dOXzEud2Vi/cD92PTE3NjE1NzI1/NTImd2lkdGg9NzIw"/>
     <Card user="John Doe" info="Product Manager" img="https://imgs.search.brave.com/7UQWghEI_MG6Q3ngUnIpLqsJmqwmDe4s8o9RjrEmKqQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8x/MC8zMS8yMi81Ny9z/bWlsaW5nLW1lbi0z/Nzg2ODY2XzY0MC5q/cGc"/>
    </div>
  )
}

export default App