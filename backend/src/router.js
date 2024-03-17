const express = require("express");

const router = express.Router();

const tasksController = require("./controllers/tasksController");
const tasksMiddleware = require("./middlewares/tasksMiddleware");

router.get("/tasks", tasksController.getAll);

router.delete("/tasks/:id", tasksController.deleteTask);

router.post(
    "/tasks",
    tasksMiddleware.validateFieldTitle,
    tasksController.createTask
);

router.put(
    "/tasks/:id",
    tasksMiddleware.validateFieldTitle,
    tasksMiddleware.validateFieldStatus,
    tasksController.updateTask
);

module.exports = router;
