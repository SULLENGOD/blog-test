import { Request, Response } from "express";
import { Post } from "../models/post.model";
import { Op } from "sequelize";

interface Queries {
    title?: string;
    author?: string;
    content?: string
}

export const createPost = async(req: Request, res: Response) => {
    const post = req.body;
    const newPost = await Post.create({
        ...post,
        createdAt: Date.now()
    });
    res.send(newPost);
};

export const getPosts = async (req: Request, res: Response) => {
    const { query } = req;
    const { title, author, content }: Queries = query;
    const whereParam: Queries | any = {}; 
  
    if (title) {
      whereParam.title = { [Op.like]: `%${title}%` };
    }
    if (author) {
      whereParam.author = { [Op.like]: `%${author}%` };
    }
    if (content) {
      whereParam.content = { [Op.like]: `%${content}%` };
    }
  
    const posts = await Post.findAll({
      where: whereParam,
    });
  
    res.send(posts);
  };

export const getPost = async(req: Request, res: Response) => {
    const post = await Post.findOne({where: {id: req.params.id}});
    res.send(post);
};