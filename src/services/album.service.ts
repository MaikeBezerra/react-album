import { api } from "../utils/api";

export const service = {

    getAlbums: async () => {
        const resp = await api.get('/albums');
        return resp.data; 
    },

    getAlbum: async (id: string) => {
        const resp = await api.get(`/albums/${id}`);
        return resp.data; 
    },

    getPhotosFromAlbum: async (id: string) => {
        const req = await api.get(`/albums/${id}/photos`);
        return req.data;
    }

}