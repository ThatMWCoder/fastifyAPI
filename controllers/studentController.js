const { v4: uuidV4 } = require("uuid");
let students = require("../Students");

const getStudents = (req, reply) => {
  reply.send(students);
};

const getStudent = (req, reply) => {
  const { id } = req.params;
  const student = students.find((student) => student.id === id);
  reply.send(student);
};

const searchStudents = (req, reply) => {
  const q = ((req.query?.q) ?? '').toLowerCase();
  reply.send(
    students.filter(({ name }) => name.toLowerCase().includes(q))
  );
};

const addStudent = (req, reply) => {
  const { name, level } = req.body;
  const student = {
    id: uuidV4(),
    name,
    level,
  };
  students = [...students, student];

  reply.code(201).send(student);
};

const updateStudent = (req, reply) => {
  const { id } = req.params;
  const { name, level } = req.body;
  students = students.map((student) =>
    student.id === id ? { id, name, level } : student
  );

  student = students.find((student) => student.id === id);

  reply.send(student);
};

const deleteStudent = (req, reply) => {
  const { id } = req.params;
  students = students.filter((student) => student.id !== id);

  reply.send({ message: `Student with id ${id} has been deleted` });
};

module.exports = {
  getStudents,
  searchStudents,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
};
