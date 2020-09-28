<template>
  <div v-if="currentCampaign" class="edit-form">
    <h4>Campaign</h4>
    <form>
      <div class="form-group">
        <label for="title">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="currentCampaign.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Status</label>
        <input
          type="text"
          class="form-control"
          id="status"
          v-model="currentCampaign.status"
        />
      </div>
    </form>

    <button class="badge badge-danger mr-2" @click="deleteCampaign">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updateCampaign">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Campaign...</p>
  </div>
</template>

<script>
import CampaignsDataService from "../services/CampaignsDataService";

export default {
  name: "campaign",
  data() {
    return {
      currentCampaign: null,
      message: "",
    };
  },
  methods: {
    getCampaign(id) {
      CampaignsDataService.get(id)
        .then((response) => {
          this.currentCampaign = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateCampaign() {
      CampaignsDataService.update(this.currentCampaign.id, {
          name: this.currentCampaign.name,
          status: this.currentCampaign.status
      })
        .then((response) => {
          console.log(response.data);
          this.message = "The campaign was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteCampaign() {
      CampaignsDataService.delete(this.currentCampaign.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "campaigns" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getCampaign(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
