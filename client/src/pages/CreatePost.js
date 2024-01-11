import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("You must enter a title for your post."),
    description: yup
      .string()
      .required("You must enter a description for your post."),
    userName: yup
      .string()
      .min(3)
      .max(15)
      .required("You must provide your username before submitting the post."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitPost = async (data) => {
    const newPost = {
      title: data.title,
      description: data.description,
      userName: data.userName,
    };
    const result = await fetch("http://localhost:3001/posts/createpost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
    const response = await result.json();
    console.log(response);
    navigate("/");
  };

  return (
    <div className="createPost">
      <h1>New Post Form</h1>
      <form onSubmit={handleSubmit(submitPost)}>
        <label>
          Title: <small>{errors?.title?.message}</small>
          <input type="text" name="title" {...register("title")} />
        </label>
        <label>
          Description: <small>{errors?.description?.message}</small>
          <textarea
            cols={10}
            rows={15}
            name="description"
            {...register("description")}
          />
        </label>
        <label>
          Username: <small>{errors?.userName?.message}</small>
          <input type="text" name="userName" {...register("userName")} />
        </label>
        <input type="submit" value="Post" />
      </form>
    </div>
  );
}

export default CreatePost;
