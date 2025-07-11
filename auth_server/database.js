import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Blog from "./Blog.js"
dotenv.config({ quite: true })

mongoose.connect(process.env.managedCluster)

const article1 = await Blog.create({
    title: 'Awesome Post 1',
    slug: 'awesome-post',
    published: true,
    content: 'This is the best post ever',
})
