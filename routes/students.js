const {
  getStudents,
  searchStudents,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const StudentSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    level: { type: "string" },
  },
};

const getStudentsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: StudentSchema,
      },
    },
  },
  handler: getStudents,
};

const getStudentOpts = {
  schema: {
    response: {
      200: StudentSchema,
    },
  },
  handler: getStudent,
};

const searchStudentOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: StudentSchema,
      },
    },
  },
  handler: searchStudents,
};

const postStudentOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name", "level"],
      properties: {
        name: { type: "string" },
        level: { type: "string" },
      },
    },
    response: {
      201: StudentSchema,
    },
  },
  handler: addStudent,
};

const updateStudentOpts = {
  schema: {
    response: {
      200: StudentSchema,
    },
  },
  handler: updateStudent,
};

const deleteStudentOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: deleteStudent,
};

function studentRoutes(fastify, options, done) {
    // Getting all students
  fastify.get("/students", getStudentsOpts);

<<<<<<< HEAD
  fastify.get("/search", searchStudentOpts);

  // Getting single item
=======
  // Getting single student
>>>>>>> 855370e3273489100f96c126f40f16de955bc8fc
  fastify.get("/students/:id", getStudentOpts);

  // Adding an student
  fastify.post("/students", postStudentOpts);
<<<<<<< HEAD

  //  Updating item
=======
  
  //  Updating a student
>>>>>>> 855370e3273489100f96c126f40f16de955bc8fc
  fastify.put("/students/:id", updateStudentOpts);

  //  Deleting item
  fastify.delete("/students/:id", deleteStudentOpts);

  done();
}

module.exports = studentRoutes;
