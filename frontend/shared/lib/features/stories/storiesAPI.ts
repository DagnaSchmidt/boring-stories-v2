import axios from 'axios';
import { StoryType } from '@/types/StoryType';
import { selectToken } from '../user/userSlice';
import { useAppSelector } from '../../hooks';

const baseUrl = 'http://localhost:8000/api/stories';
const token = useAppSelector(selectToken);

export const getStories = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export const createStory = async (data: StoryType) => {
    const config = {
        headers: {
            Authorization: token
        },
    };

    const response = await axios.post(baseUrl, data, config);
    return response.data;
};
