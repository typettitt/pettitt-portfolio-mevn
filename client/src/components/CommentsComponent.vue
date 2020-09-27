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
    <!--*******************COMMENTS*******************-->
    <!-- ******************************************* -->
    <b-row v-for="comment in allComments" :key="comment._id" align-h="center" class="mb-3">
      <b-card border-variant="primary" bg-variant="dark" text-variant="white" style="width: 75%;">
        <b-card-text>
          <b-row align-h="between" class="mb-2">
            <b-col align="left" cols="6">
              <small class="mr-2">{{comment.first_name + ' ' + comment.last_name}}</small>
            </b-col>
            <b-col align="right" cols="6">
              <small>{{moment(comment.created_at).fromNow()}}</small>
            </b-col>
          </b-row>
          <b-row class="mx-2">{{comment.description}}</b-row>
          <b-row align-h="end" class="mb-2">
            <b-button
              type="button"
              variant="secondary"
              class="mx-2"
              size="sm"
              @click="openEditModal(comment._id)"
            >Edit</b-button>
            <b-button
              type="button"
              variant="danger"
              class="mx-2"
              size="sm"
              @click="deleteComment(comment._id)"
            >Delete</b-button>
          </b-row>
        </b-card-text>
      </b-card>
    </b-row>
    <!-- **************************************************** -->
    <!--*******************ADD COMMENT MODAL*******************-->
    <!-- **************************************************** -->
    <b-modal
      id="modal-add-comment"
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
                v-model="comment.first_name"
                type="text"
                required
                autocomplete="off"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-2" label="Last Name" label-for="input-2">
              <b-form-input id="input-2" v-model="comment.last_name" type="text" autocomplete="off"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="input-group-3" label="Title" label-for="input-3">
              <b-form-input id="input-3" v-model="comment.title" type="text" autocomplete="off"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-4" label="Organization" label-for="input-4">
              <b-form-input
                id="input-4"
                v-model="comment.organization"
                type="text"
                autocomplete="off"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="input-group-7" label="Comment" label-for="input-7">
              <b-form-textarea
                id="input-7"
                v-model="comment.description"
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
    <!-- ******************************************************** -->
    <!--*******************EDIT comment MODAL****************-->
    <!-- **************************************************** -->
    <b-modal
      id="modal-edit-comment"
      title="Edit Your Comment"
      v-show="showEditModal"
      @hide="cancelEditModal"
      button-size="sm"
      hide-footer
    >
      <b-form>
        <b-row>
          <b-col>
            <b-form-group id="input-group-1" label="First Name" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="editComment.first_name"
                type="text"
                required
                autocomplete="off"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-2" label="Last Name" label-for="input-2">
              <b-form-input id="input-2" v-model="editComment.last_name" type="text" autocomplete="off"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="input-group-3" label="Title" label-for="input-3">
              <b-form-input id="input-3" v-model="editComment.title" type="text" autocomplete="off"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-4" label="Organization" label-for="input-4">
              <b-form-input
                id="input-4"
                v-model="editComment.organization"
                type="text"
                autocomplete="off"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="input-group-7" label="comment" label-for="input-7">
              <b-form-textarea
                id="input-7"
                v-model="editComment.description"
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
          <b-button type="button"  @click= cancelEditModal variant="secondary" class="mx-2">Cancel</b-button>
          <b-button type="button"  @click= submitEditModalForm variant="primary" class="mx-2">Submit</b-button>
        </b-row>
      </b-form>
    </b-modal>
  </b-container>
</template>
<script>
export default {
  data: function () {
    return {
      comment: {
        first_name: "",
        last_name: "",
        title: "",
        organization: "",
        description: "",
      },
      allComments: [],
      editComment: {
        id: "",
        first_name: "",
        last_name: "",
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
    this.getAllComments();
  },
  methods: {
    charCount() {
      this.totalCharacter = this.comment.description.length;
    },
    getAllComments() {
      let uri = "api/comment";
      this.axios
        .get(uri)
        .then((response) => {
          this.allComments = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    openCreateModal() {
      this.$bvModal.show("modal-add-comment");
    },
    openEditModal(id) {
      this.getComment(id);
      this.$bvModal.show("modal-edit-comment");
    },
    cancelCreateModal() {
      this.$bvModal.hide("modal-add-comment");
      this.showCreateModal = false;
      this.resetCreateModalForm();
    },
    resetCreateModalForm() {
      this.comment.first_name = "";
      this.comment.last_name = "";
      this.comment.title = "";
      this.comment.organization = "";
      this.comment.description = "";
    },
    resetOneComment() {
      this.editComment.id = "";
      this.editComment.first_name = "";
      this.editComment.last_name = "";
      this.editComment.title = "";
      this.editComment.organization = "";
      this.editComment.description = "";
    },
    cancelEditModal() {
      this.$bvModal.hide("modal-edit-comment");
      this.showEditModal = false;
      this.resetEditModalForm();
    },
    resetEditModalForm() {
      this.comment.first_name = "";
      this.comment.last_name = "";
      this.comment.title = "";
      this.comment.organization = "";
      this.comment.description = "";
    },
    submitCreateModalForm() {
      let uri = "api/comment";
      this.axios.post(uri, this.comment).then(() => {
        this.getAllComments();
      });
    },
    submitEditModalForm() {
      let uri = "api/comment/" + this.editComment.id;
        console.log(uri);
      this.axios.post(uri, this.editComment).then(() => {
        this.getAllComments();
        this.cancelEditModal()
      })
    },
    deleteComment(id){
      let uri = "api/comment/"+ id;
      this.resetOneComment();
      this.axios
        .delete(uri)
        .then(() => {
          this.getAllComments();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getComment(id){
      let uri = "api/comment/"+ id;
      this.resetOneComment();
      this.axios
        .get(uri)
        .then((response) => {
          this.editComment.id = response.data._id;
          this.editComment.first_name = response.data.first_name;
          this.editComment.last_name = response.data.last_name;
          this.editComment.title = response.data.title;
          this.editComment.organization = response.data.organization;
          this.editComment.description = response.data.description;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
};
</script>