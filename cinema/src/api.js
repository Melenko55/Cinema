import axios from 'axios'

const api_path = 'http://localhost:3000/api/v1/';

const api_instance = axios.create({
    baseURL: api_path,
    timeout: 1000,
});

const API = {
    async getAllFilms() {
        return await api_instance.get('films');
    },
    async getFilmById(id) {
        return await api_instance.get(`films/${id}`);
    },
    async addFilm(film) {
        return await api_instance.post('films', film);
    },
    async deleteFilm(id) {
        return await api_instance.delete(`films/${id}`);
    },
    async updateFilm(id, film) {
        return await api_instance.put(`films/${id}`, film);
    },
    async getAllComments() {
        return await api_instance.get('comments');
    },
    async addComment(comment) {
        return await api_instance.post('comments', comment);
    },
    async deleteComment(id) {
        return await api_instance.delete(`comments/${id}`);
    }
}

export default API;