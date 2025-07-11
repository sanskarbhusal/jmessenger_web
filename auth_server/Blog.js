import mongoose from "mongoose"
const { Schema, model } = mongoose;

const blogSchema = new Schema({
    title: String,
    slug: String,
    published: Boolean,
    content: String,
})
const Blog = model("Blog", blogSchema);
export default Blog;
