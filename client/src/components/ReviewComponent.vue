<template>
  <b-container fluid>
    <div class="text-white text-center px-5 mb-5">
      <h1>Leave A Suggestion</h1>
    </div>
    <b-row align-h="center" class="mb-4">
      <b-button variant="outline-primary" size="sm" class="mx-4" @click="openCreateModal()">
        Add A Suggestion
        <b-icon icon="plus" aria-hidden="true"></b-icon>
      </b-button>
    </b-row>
    <!-- ******************************************* -->
    <!--*******************REVIEWS*******************-->
    <!-- ******************************************* -->
    <b-row v-for="review in allReviews" :key="review._id" align-h="center" class="mb-3">
      <b-card border-variant="primary" bg-variant="dark" text-variant="white" style="width: 50%;">
        <b-card-text> 
            <b-row align-h="end" class="mb-2">
                <b-button type="reset" variant="secondary" class="mx-2" size="sm" @click="openEditModal(review._id)">Edit</b-button>
                <b-button type="submit" variant="danger" class="mx-2" size="sm" @click="verifyDelete(review._id)">Delete</b-button>
                </b-row>
          <b-row align-h="between" class="mb-2">
            <b-col align="left" cols="6">
              <small class="mr-2">{{review.first_name + ' ' + review.last_name}} </small>
              <!-- <small class="mr-2">{{review.title}}</small> -->
            </b-col>
            <b-col align="right" cols="6">
              <small>{{moment(review.created_at).fromNow()}}</small>
            </b-col>
          </b-row>
          <b-row class="mx-2">{{review.description}}</b-row>
        </b-card-text>
      </b-card>
    </b-row>
    <!-- **************************************************** -->
    <!--*******************ADD REVIEW MODAL*******************-->
    <!-- **************************************************** -->
    <b-modal
      id="modal-add-review"
      title="Your Suggestion"
      v-show="showEditModal"
      @hide="cancelEditModal"
      button-size="sm"
      hide-footer
    >
      <b-form @submit="submitCreateModalForm" @reset="resetCreateModalForm">
        <b-row>
          <b-col>
            <b-form-group id="input-group-1" label="First Name" label-for="input-1">
              <b-form-input id="input-1" v-model="review.first_name" type="text" required autocomplete="off"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-2" label="Last Name" label-for="input-2">
              <b-form-input id="input-3" v-model="review.last_name" type="text" autocomplete="off"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="input-group-3" label="Title" label-for="input-3">
              <b-form-input id="input-3" v-model="review.title" type="text" autocomplete="off"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-4" label="Organization" label-for="input-4">
              <b-form-input id="input-4" v-model="review.organization" type="text" autocomplete="off"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              id="input-group-5"
              label="Email Address"
              label-for="input-5"
              description="You're email will not be shown or shared but is required for verification purposes."
            >
              <b-form-input
                id="input-5"
                v-model="review.email"
                type="email"
                placeholder="example@email.com"
                required
                autocomplete="off"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="input-group-6" label="Suggestion" label-for="input-6">
              <b-form-textarea
                id="input-6"
                v-model="review.description"
                placeholder="Enter your suggestion here..."
                required
                rows="3"
                max-rows="6"
                autocomplete="off"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row align-h="end">
          <b-button type="reset" variant="secondary" class="mx-2">Reset</b-button>
          <b-button type="submit" variant="primary" class="mx-2">Submit</b-button>
        </b-row>
      </b-form>
    </b-modal>
    <!-- **************************************************** -->
    <!--*******************VERIFY DELETE MODAL***************-->
    <!-- **************************************************** -->

    <!-- **************************************************** -->
    <!--*******************EDIT SUGGESTION MODAL***************-->
    <!-- **************************************************** -->
    <b-modal
      id="modal-edit-review"
      title="Your Suggestion"
      v-show="showEditModal"
      @hide="cancelCreateModal"
      button-size="sm"
      hide-footer
    >
      <b-form @submit="submitCreateModalForm" @reset="resetCreateModalForm">
        <b-row>
          <b-col>
            <b-form-group id="input-group-1" label="First Name" label-for="input-1">
              <b-form-input id="input-1" v-model="review.first_name" type="text" required autocomplete="off"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-2" label="Last Name" label-for="input-2">
              <b-form-input id="input-3" v-model="review.last_name" type="text" autocomplete="off"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="input-group-3" label="Title" label-for="input-3">
              <b-form-input id="input-3" v-model="review.title" type="text" autocomplete="off"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-4" label="Organization" label-for="input-4">
              <b-form-input id="input-4" v-model="review.organization" type="text" autocomplete="off"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              id="input-group-5"
              label="Email Address"
              label-for="input-5"
              description="You're email will not be shown or shared but is required for verification purposes."
            >
              <b-form-input
                id="input-5"
                v-model="review.email"
                type="email"
                placeholder="example@email.com"
                required
                autocomplete="off"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="input-group-6" label="Suggestion" label-for="input-6">
              <b-form-textarea
                id="input-6"
                v-model="review.description"
                placeholder="Enter your suggestion here..."
                required
                rows="3"
                max-rows="6"
                autocomplete="off"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row align-h="end">
          <b-button type="reset" variant="secondary" class="mx-2">Reset</b-button>
          <b-button type="submit" variant="primary" class="mx-2">Submit</b-button>
        </b-row>
      </b-form>
    </b-modal>
  </b-container>
</template>
<script>
export default {
  data: function () {
    return {
      review: {
        first_name: "",
        last_name: "",
        email: "",
        title: "",
        organization: "",
        description: "",
      },
      allReviews: [],
      showModal: false,
      showEditModal: false,
      console: ''
    };
  },
  created() {
    this.getAllReviews();
  },
  methods: {
    getAllReviews() {
      let uri = "api/review";
      this.axios
        .get(uri)
        .then((response) => {
          this.allReviews = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    openCreateModal() {
      this.$bvModal.show("modal-add-review");
    },
    openEditModal(id){
        console.log(id);
    },
    cancelCreateModal() {
      this.$bvModal.hide("modal-add-review");
      this.showModal = false;
      this.resetCreateModalForm();
    },
    resetCreateModalForm() {
        this.review.first_name = "";
        this.review.last_name = "";
        this.review.email = "";
        this.review.title = "";
        this.review.organization = "";
        this.review.description = "";
    },
    cancelEditModal() {
      this.$bvModal.hide("modal-edit-review");
      this.showModal = false;
      this.resetEditModalForm();
    },
    resetEditModalForm() {
        this.review.first_name = "";
        this.review.last_name = "";
        this.review.email = "";
        this.review.title = "";
        this.review.organization = "";
        this.review.description = "";
    },
    verifyDelete(id){
        console.log(id);
    },
    submitCreateModalForm() {
      let uri = "api/review";
      this.axios.post(uri, this.review).then(() => {
        this.$router.push({ name: "review" });
        this.getAllReviews();
      });
    },
  },
};
</script>