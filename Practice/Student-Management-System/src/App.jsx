import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [search, setSearch] = useState("");

  const addStudent = () => {
    if (!name || !branch || !cgpa) {
      alert("Fill all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      branch,
      cgpa,
    };

    setStudents([...students, newStudent]);

    setName("");
    setBranch("");
    setCgpa("");
  };

  const deleteStudent = (id) => {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Management System</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Branch"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
      />

      <input
        type="number"
        placeholder="CGPA"
        value={cgpa}
        onChange={(e) => setCgpa(e.target.value)}
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Search Student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Total Students: {students.length}</h3>

      {filteredStudents.map((student) => (
        <div
          key={student.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <p>Name: {student.name}</p>
          <p>Branch: {student.branch}</p>
          <p>CGPA: {student.cgpa}</p>

          <button
            onClick={() => deleteStudent(student.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;