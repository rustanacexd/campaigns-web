import http from "../http-common";

class CampaignsDataService {
  getAll() {
    return http.get("/campaigns/");
  }

  get(id) {
    return http.get(`/campaigns/${id}/`);
  }

  create(data) {
    return http.post("/campaigns/", data);
  }

  update(id, data) {
    return http.put(`/campaigns/${id}/`, data);
  }

  delete(id) {
    return http.delete(`/campaigns/${id}/`);
  }
}

export default new CampaignsDataService();
