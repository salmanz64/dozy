const express = require("express");
const { Router } = express;
const { auth } = require("../middleware/auth.js");
const { tasks } = require("../db/schema.js");
const { db } = require("../db/index.js");
const { eq } = require("drizzle-orm");

const taskRouter = Router();

taskRouter.post("/", auth, async (req, res) => {
  try {
    req.body = { ...req.body, dueAt: new Date(req.body.dueAt), uid: req.user };
    const newTask = req.body;

    const [task] = await db.insert(tasks).values(newTask).returning();

    res.status(201).json(task);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

taskRouter.get("/", auth, async (req, res) => {
  try {
    const allTasks = await db
      .select()
      .from(tasks)
      .where(eq(tasks.uid, req.user));

    res.json(allTasks);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

taskRouter.delete("/", auth, async (req, res) => {
  try {
    const { taskId } = req.body;
    await db.delete(tasks).where(eq(tasks.id, taskId));

    res.json(true);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

taskRouter.post("/sync", auth, async (req, res) => {
  try {
    const tasksList = req.body;

    const filteredTasks = [];

    for (let t of tasksList) {
      t = {
        ...t,
        dueAt: new Date(t.dueAt),
        createdAt: new Date(t.createdAt),
        updatedAt: new Date(t.updatedAt),
        uid: req.user,
      };
      filteredTasks.push(t);
    }

    const pushedTasks = await db
      .insert(tasks)
      .values(filteredTasks)
      .returning();

    res.status(201).json(pushedTasks);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

module.exports = taskRouter;
