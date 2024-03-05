import { api } from "../utils/api";

export const service = {

    getPhoto: async (id: string) => {
        const req = await api.get(`/photos/${id}`);
        return req.data;
    }

}