<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="campaign.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="status">Status</label>
        <input
          class="form-control"
          id="status"
          required
          v-model="campaign.status"
          name="status"
        />
      </div>

      <button @click="saveCampaign" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newCampaign">Add</button>
    </div>
  </div>
</template>

<script>
import CampaignsDataService from "../services/CampaignsDataService";

export default {
  name: "add-campaign",
  data() {
    return {
      campaign: {
        id: null,
        name: "",
        status: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveCampaign() {
      const data = {
        name: this.campaign.name,
        status: this.campaign.status,
      };

      CampaignsDataService.create(data)
        .then((response) => {
          this.campaign.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newCampaign() {
      this.submitted = false;
      this.campaign = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
