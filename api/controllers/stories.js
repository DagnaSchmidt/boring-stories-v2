import express from 'express';
import Story from '../models/story.js';

export const storiesRouter = express.Router();


storiesRouter.get('/', async (request, response) => {
    const stories = await Story.find({});
    response.json(stories);
});

storiesRouter.get('/:id', async (request, response) => {
    const story = await Story.findById(request.params.id);
    if (story) {
        response.json(story);
    } else {
        response.status(404).end();
    }
});

storiesRouter.post('/', async (request, response) => {
    const body = request.body;

    if (!request.body.user) {
        return response.status(401).json({ error: 'invalid token' });
    }
    const newStory = new Story({ ...body });
    const savedStory = await newStory.save();

    response.status(201).json(savedStory);
});

storiesRouter.put('/:id/images', async (request, response) => {
    const body = request.body;
    const storyToUpdate = await Story.findById(request.params.id);

    if (!request.body.user) {
        return response.status(401).json({ error: 'invalid token' });
    }

    if (!storyToUpdate) {
        return response.status(400).json({ error: 'invalid id' });
    } else {
        const updatedStory = await Story.findByIdAndUpdate(request.params.id, { images: [...storyToUpdate.images, ...body.images] });
        response.status(201).json(updatedStory);
    }

});

storiesRouter.delete('/:id', async (request, response) => {
    const storyToDelete = await Story.findById(request.params.id);

    if (!storyToDelete) {
        return response.status(400).json({ error: 'invalid id' });
    } else {
        const deletedStory = await Story.findByIdAndDelete(request.params.id);
        response.status(204).end();
    }

});
