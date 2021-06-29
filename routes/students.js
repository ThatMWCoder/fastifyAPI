const {
  getStudents,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent
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
          properties:{
              message:{ type: "string"}
          } 
    },
    },
  },
  handler: deleteStudent,
};

function studentRoutes(fastify, options, done) {
  // Getting all items
  fastify.get("/students", getStudentsOpts);

  // Getting single item
  fastify.get("/students/:id", getStudentOpts);

  // Adding an item
  fastify.post("/students", postStudentOpts);
  
  //  Updating item
  fastify.put("/students/:id", updateStudentOpts);

  //  Deleting item
  fastify.delete("/students/:id", deleteStudentOpts);


  done();
}

module.exports = studentRoutes;
