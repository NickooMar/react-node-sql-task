import React, { useContext } from "react";

import { Form, Formik } from "formik";

import { createTaskRequest } from "../api/tasks.api"; //Funcion que llama a la api y le pasa los valores de la tarea (task)


const TaskForm = () => {
  const intialInputValues = {
    title: "",
    description: "",
  };


  return (
    <div>
      <Formik
        initialValues={intialInputValues}
        onSubmit={async(values, actions) => {
          try {
          const response = await createTaskRequest(values) //Importante pasarle los valores que requiere la funcion para pasarselos al backend
            console.log(response)
            actions.resetForm()
          } catch (error) {
            console.error(error)
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />

            <label>description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving" : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
