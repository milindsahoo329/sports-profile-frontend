import axios from "axios";

class ProfileService {

    getProfileById(id) {
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/profiles/id/${id}`);
    }

    getAllProfiles(data) {
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/profiles/all`, data);
    }

    createProfile(data) {
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/profiles/create`, data);
    }

    editProfile(data) {
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/v1/profiles/update`, data);
    }

}

export default new ProfileService();
