import { pool } from "../db.js";

export const getTasks = async (req, res) => {

  const [result] = await pool.query('SELECT * FROM tasks ORDER BY createdAt ASC');

    res.json(result);

};
export const getTask = async(req, res) => {
    const { id } = req.params;

    const [ result ]= await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);

    if(result.length === 0 ) res.status(404).json({message: 'Task not found'});

    res.json(result[0]);
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;

  const [result] = await pool.query(
    "INSERT INTO tasks(title, description) values (?, ?)",
    [title, description]
  );

  console.log(result);
  res.json({
    id: result.insertId,
    title,
    description,
  });
};

export const updateTask = (req, res) => {
  res.send("actualizando tarea");
};
export const deleteTask = (req, res) => {
  res.send("eliminando tarea");
};
