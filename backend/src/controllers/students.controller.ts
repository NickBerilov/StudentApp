import { Request, Response } from 'express';

import studentService from '../services/students.service';

export const list = (req: Request, res: Response) => {
    const students = studentService.findAll();
    res.send(students);
};

export const add = (req: Request, res: Response) => {
    const student = studentService.create(req.body);
    res.status(201).send(student);
};

export const edit = (req: Request, res: Response) => {
    const student = studentService.update(req.params.userId, req.body);
    res.send(student);
};

export const remove = (req: Request, res: Response) => {
    studentService.delete(req.params.userId);
    res.sendStatus(204);
};