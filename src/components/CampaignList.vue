<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Campaigns List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(campaign, index) in campaigns"
          :key="index"
          @click="setActiveCampaign(campaign, index)"
        >
          {{ campaign.name }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentCampaign">
        <h4>Campaign</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentCampaign.name}}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentCampaign.status }}
        </div>

        <a
          class="badge badge-warning"
          :href="'/campaigns/' + currentCampaign.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Campaign...</p>
      </div>
    </div>
  </div>
</template>

<script>
import CampaignsDataService from "../services/CampaignsDataService";

export default {
  name: "campaigns-list",
  data() {
    return {
      campaigns: [],
      currentIndex: -1,
      currentCampaign: null,
    };
  },
  methods: {
    retrieveCampaigns() {
      CampaignsDataService.getAll()
        .then((response) => {
          this.campaigns = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    setActiveCampaign(campaign, index) {
      this.currentCampaign = campaign;
      this.currentIndex = index;
    },
  },
  mounted() {
    this.retrieveCampaigns();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
