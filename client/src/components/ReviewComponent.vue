<template>
  <b-container fluid>
    <div class="text-white text-center px-5 mb-5">
      <h1>Leave A Comment</h1>
    </div>
    <b-row align-h="center" class="mb-4">
      <b-button variant="outline-primary" size="sm" class="mx-4" @click="openCreateModal()">
        Add A Comment
        <b-icon icon="plus" aria-hidden="true"></b-icon>
      </b-button>
    </b-row>
    <!-- ******************************************* -->
    <!--*******************REVIEWS*******************-->
    <!-- ******************************************* -->
    <b-row v-for="review in allReviews" :key="review._id" align-h="center" class="mb-3">
      <b-card border-variant="primary" bg-variant="dark" text-variant="white" style="width: 75%;">
        <b-card-text>
          <b-row align-h="end" class="mb-2">
            <b-button
              type="reset"
              variant="secondary"
              class="mx-2"
              size="sm"
              @click="openEditModal(review._id)"
            >Edit</b-button>
            <b-button
              type="submit"
              variant="danger"
              class="mx-2"
              size="sm"
              @click="verifyDelete(review._id)"
            >Delete</b-button>
          </b-row>
          <b-row align-h="between" class="mb-2">
            <b-col align="left" cols="6">
              <small class="mr-2">{{review.first_name + ' ' + review.last_name}}</small>
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
      title="Your Comment"
      v-show="showCreateModal"
      @hide="cancelCreateModal"
      button-size="sm"
      hide-footer
    >
      <b-form @submit="submitCreateModalForm" @reset="resetCreateModalForm">
        <b-row>
          <b-col>
            <b-form-group id="input-group-1" label="First Name" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="review.first_name"
                type="text"
                required
                autocomplete="off"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-2" label="Last Name" label-for="input-2">
              <b-form-input id="input-2" v-model="review.last_name" type="text" autocomplete="off"></b-form-input>
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
              <b-form-input
                id="input-4"
                v-model="review.organization"
                type="text"
                autocomplete="off"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              id="input-group-5"
              label="Email Address"
              label-for="input-5"
              description="Your email will not be shown or shared."
            >
              <b-form-input
                id="input-5"
                v-model="review.email"
                type="email"
                placeholder="example@email.com"
                autocomplete="off"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-6" label="PIN" label-for="input-6">
              <b-form-input
                id="input-6"
                v-model="review.pin"
                type="number"
                maxlength="4"
                autocomplete="off"
                required
              ></b-form-input>
            </b-form-group>
            <b-tooltip target="input-6" triggers="focus" placement="bottom">
              This PIN will be used as a verification so you can delete and edit your comment only. Max length of 8.
            </b-tooltip>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="input-group-7" label="Comment" label-for="input-7">
              <b-form-textarea
                id="input-7"
                v-model="review.description"
                placeholder="Enter your comment here..."
                required
                rows="3"
                :maxlength="maxcommentLength"
                max-rows="6"
                autocomplete="off"
                @keyup="charCount()"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
        {{ totalCharacter }} / 150
        <b-row align-h="end">
          <b-button type="reset" variant="secondary" class="mx-2">Reset</b-button>
          <b-button type="submit" variant="primary" class="mx-2">Submit</b-button>
        </b-row>
      </b-form>
    </b-modal>
    <!-- **************************************************** -->
    <!--*******************VERIFICATION MODAL***************-->
    <!-- **************************************************** -->
    <b-modal
      id="modal-verify"
      title="Enter Your PIN"
      v-show="showVerifyModal"
      @hide="cancelVerifyModal"
      button-size="sm"
      hide-footer
    >
      <b-form @submit="submitVerifyModal" @reset="resetVerifyForm">
        <b-row>
          <b-col>
             <b-form-group id="input-group-8" label="PIN" label-for="input-8">
              <b-form-input
                id="input-8"
                v-model="verifyPin"
                type="number"
                maxlength="4"
                autocomplete="off"
                required
              ></b-form-input>
            </b-form-group>
            <b-tooltip target="input-8" triggers="focus" placement="bottomleft">
              Enter the PIN you used to create this comment. 
            </b-tooltip>
          </b-col>
        </b-row>
        <b-row align-h="end">
          <b-button type="reset" variant="secondary" class="mx-2">Reset</b-button>
          <b-button type="submit" variant="primary" class="mx-2">{{verifySubmit}}</b-button>
        </b-row>
      </b-form>
    </b-modal>
    <!-- **************************************************** -->
    <!--*******************EDIT comment MODAL***************-->
    <!-- **************************************************** -->
    <b-modal
      id="modal-edit-review"
      title="Your comment"
      v-show="showEditModal"
      @hide="cancelEditModal"
      button-size="sm"
      hide-footer
    >
      <b-form @submit="submitCreateModalForm" @reset="resetCreateModalForm">
        <b-row>
          <b-col>
            <b-form-group id="input-group-1" label="First Name" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="review.first_name"
                type="text"
                required
                autocomplete="off"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-2" label="Last Name" label-for="input-2">
              <b-form-input id="input-2" v-model="review.last_name" type="text" autocomplete="off"></b-form-input>
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
              <b-form-input
                id="input-4"
                v-model="review.organization"
                type="text"
                autocomplete="off"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              id="input-group-5"
              label="Email Address"
              label-for="input-5"
              description="Your email will not be shown or shared."
            >
              <b-form-input
                id="input-5"
                v-model="review.email"
                type="email"
                placeholder="example@email.com"
                autocomplete="off"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-6" label="PIN" label-for="input-6">
              <b-form-input
                id="input-6"
                v-model="review.pin"
                type="number"
                maxlength="4"
                autocomplete="off"
                required
              ></b-form-input>
            </b-form-group>
            <b-tooltip target="input-6" triggers="focus" placement="bottom">
              This PIN will be used as a verification so you can delete and edit your comment only. Max length of 8.
            </b-tooltip>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="input-group-7" label="comment" label-for="input-7">
              <b-form-textarea
                id="input-7"
                v-model="review.description"
                placeholder="Enter your comment here..."
                required
                rows="3"
                :maxlength="maxcommentLength"
                max-rows="6"
                autocomplete="off"
                @keyup="charCount()"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
        {{ totalCharacter }} / 150
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
        pin: "",
      },
      allReviews: [],
      oneReview: {
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        title: "",
        organization: "",
        description: "",
        pin: "",
      },
      showCreateModal: false,
      showEditModal: false,
      showVerifyModal: false,
      console: "",
      totalCharacter: 0,
      maxcommentLength: 150,
      verifyPin: "", 
      verifySubmit: ""
    };
  },
  created() {
    this.getAllReviews();
  },
  methods: {
    charCount() {
      this.totalCharacter = this.review.description.length;
    },
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
    openEditModal(id) {
      console.log(id);
    },
    cancelCreateModal() {
      this.$bvModal.hide("modal-add-review");
      this.showCreateModal = false;
      this.resetCreateModalForm();
    },
    resetCreateModalForm() {
      this.review.first_name = "";
      this.review.last_name = "";
      this.review.email = "";
      this.review.title = "";
      this.review.organization = "";
      this.review.description = "";
      this.review.pin ="";
    },
    resetOneReview() {
      this.oneReview.id = "";
      this.oneReview.first_name = "";
      this.oneReview.last_name = "";
      this.oneReview.email = "";
      this.oneReview.title = "";
      this.oneReview.organization = "";
      this.oneReview.description = "";
      this.oneReview.pin ="";
    },
    cancelEditModal() {
      this.$bvModal.hide("modal-edit-review");
      this.showEditModal = false;
      this.resetEditModalForm();
    },
    cancelVerifyModal() {
      
    },
    resetEditModalForm() {
      this.review.first_name = "";
      this.review.last_name = "";
      this.review.email = "";
      this.review.title = "";
      this.review.organization = "";
      this.review.description = "";
      this.review.pin ="";
    },
    resetVerifyForm(){

    },
    verifyEdit(id) {
      console.log(id);
      this.verifySubmit = "Edit";
    },
    verifyDelete(id) {
      this.getReview(id);
      console.log(id);
      this.verifySubmit = "Delete";
      this.$bvModal.show("modal-verify");
    },
    submitVerifyModal() {
      if(this.verifySubmit == "Delete"){
        if(this.verifyPin == this.oneReview.pin){
          this.deleteReview(this.oneReview.id);
        }else{
          console.log("incorrect PIN");
        }
      }else if(this.verifySubmit == "Edit"){
          console.log("open edit modal");
      }
    },
    submitCreateModalForm() {
      let uri = "api/review";
      this.axios.post(uri, this.review).then(() => {
        this.$router.push({ name: "review" });
        this.getAllReviews();
      });
    },
    deleteReview(id){
      let uri = "api/review/"+ id;
      this.resetOneReview();
      this.axios
        .delete(uri)
        .then(() => {
          //this.allReviews.splice(this.selected.indexOf(id), 1);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getReview(id){
      let uri = "api/review/"+ id;
      this.resetOneReview();
      this.axios
        .get(uri)
        .then((response) => {
          this.oneReview.id = response.data._id;
          this.oneReview.first_name = response.data.first_name;
          this.oneReview.last_name = response.data.last_name;
          this.oneReview.email = response.data.email;
          this.oneReview.title = response.data.title;
          this.oneReview.organization = response.data.organization;
          this.oneReview.description = response.data.description;
          this.oneReview.pin =response.data.pin;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
};
</script>