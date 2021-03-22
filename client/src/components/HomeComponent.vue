<template>
  <b-container class="px-0" style=" -ms-overflow-style: none; scrollbar-width: none;" fluid>
    <div class="parallax" style="height: 100vh">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="text-white text-center">
        <b-row align-h="center">
          <h1 class="text-white text-uppercase font-weight-bold mb-2">
            <img class="circular--square" width="50%" src="../assets/images/square-headshot.jpg" />
          </h1>
        </b-row>
        <b-row align-h="center">
          <h1 class="text-white text-uppercase font-weight-bold mb-2">
            <strong>Tyler Pettitt</strong>
          </h1>
        </b-row>
        <b-row align-h="center">
          <h5 class="text-white text-uppercase font-weight-bold mb-2">
            <strong>Software Engineer</strong>
          </h5>
        </b-row>
        <b-row align-h="center">
          <p class="text-white text-uppercase font-weight-bold mb-2">Norfolk, Nebraska</p>
        </b-row>
      </div>
    </div>
    <!--  *******************************ABOUT ME*******************************
          *********************************************************************
    *********************************************************************-->
    <div class="text-white px-4" align="center">
      <h1 class="font-weight-bold mt-4 mb-4">About Me</h1>
      <div class="text-white" align="center">
        <p>
        Hello, I'm Tyler Pettitt. I'm a full-stack software engineer with {{moment([2018, 2, 1]).fromNow(true)}} of experience.
        </p>
        <p>
        After testing the waters in different majors like mechanical engineering, programming, and even the realm of healthcare, I settled on computer science. I graduated from Northeast Community College in 2016 with an Associate of Arts degree where I mostly focused on general studies and a few information technology courses. From there, I earned my Bachelor's degree in Computer Science at Wayne State College in May 2018. 
        During my career as a software engineer, I have worked diligently to maintain my status as an eternal student through instructor-led training, conferences, and self-directed learning. You'll find that my work experience has exposed me to diverse organizations both small and large. Looking back, I think my personable character and ability to enter every situation I come across with an open mind has brought me each and every opportunity thus far.
        </p>
      </div>
      <br />
      <br />
      <br />
    </div>
    <div class="parallax">
      <b-row align-h="center">
        <h1 class="font-weight-bold text-white mt-4 mb-2">Core Values</h1>
      </b-row>
      <div class="text-white" align="center">
        <p style="font-size: 10px;">(They're links, click 'em!)</p>
        <b-row class="mt-2 mb-2" align-h="center">
          <a
            class="nounderline link"
            href="https://www.linkedin.com/pulse/contagious-positivity-secret-weapon-successful-emil-hauch-jensen/"
            target="_blank"
          >POSITIVITY IS CONTAGIOUS</a>
        </b-row>
        <b-row class="mt-4 mb-4" align-h="center">
          <a
            class="nounderline link"
            href="http://paulgraham.com/ecw.html"
            target="_blank"
          >EMBRACE CHANGE</a>
        </b-row>
        <b-row class="mt-4 mb-4" align-h="center">
          <a
            class="nounderline link"
            href="https://www.quora.com/Is-getting-rich-worth-it-9"
            target="_blank"
          >PURSUE PASSIONS, NOT PAYCHECKS</a>
        </b-row>
        <b-row class="mt-4 mb-4" align-h="center">
          <a
            class="nounderline link"
            href="https://medium.com/@mahnoor.asghar109/never-stop-learning-because-life-never-stops-teaching-ed289f27fde4"
            target="_blank"
          >LEARN EVERY DAY</a>
        </b-row>
        <b-row class="mt-4 mb-4" align-h="center">
          <a
            class="nounderline link"
            href="https://www.positivityblog.com/how-to-overcome-failure/"
            target="_blank"
          >DO NOT BE AFRAID OF FAILURE</a>
        </b-row>
      </div>
      <br />
    </div>
    <!--  *******************************JOURNEY*******************************
          *********************************************************************
    *********************************************************************-->
    <div class="text-white px-4" align="center">
      <b-row align-h="center">
        <h1 class="font-weight-bold mt-4">Journey</h1>
      </b-row>
      <br />
        <b-card
          bg-variant="dark"
          border-variant="secondary"
          class="mb-4"
          style="max-width: 50rem; max-height: 50rem;"
        >
        <b-img-lazy fluid class="mb-4" rounded :src="require('@/assets/images/PHS.png')"/>
          <b-card-text>
            <b-row align-h="start">
              <h4>
                <a
                  class="nounderline text-primary"
                  href="https://www.piercepublic.org/"
                  target="_blank"
                >Pierce Jr. Sr. High</a>
              </h4>
            </b-row>
            <b-row align-h="start">
              <h5 class="text-success">Class of 2013</h5>
            </b-row>
            <b-row align-h="start">
              <h6>Pierce, Nebraska</h6>
              <p class="text-left">In 2013, I graduated from a small-town high school along with 50 others where I was a two-sport athlete competing in football and track. 
                You just might find my hudl highlight reel floating around the web and if you look hard enough, maybe even a college football headshot.</p>
            </b-row>
          </b-card-text>
        </b-card>
        <b-card bg-variant="dark" border-variant="secondary" class="mb-4" style="max-width: 50rem;">
          <b-img-lazy fluid class="mb-4" rounded :src="require('@/assets/images/NECC.png')"/>
          <b-card-text>
            <b-row align-h="start">
              <h4 class="text-primary">
                <a
                  class="nounderline"
                  href="https://northeast.edu/"
                  target="_blank"
                >Northeast Community College</a>
              </h4>
            </b-row>
            <b-row align-h="start">
              <h5 class="text-success">A.A. General Studies, May 2016</h5>
            </b-row>
            <b-row align-h="start">
              <h6>Norfolk, Nebraska</h6>
              <p class="text-left">At NECC, I focused on taking care of general studies requirements that would go towards my bachelor's degree. 
                I completed my A.A. with a 3.8 cumulative grade point average.</p>
            </b-row>
          </b-card-text>
        </b-card>
        <b-card bg-variant="dark" border-variant="secondary" class="mb-4" style="max-width: 50rem;">
          <b-img-lazy fluid class="mb-4" rounded :src="require('@/assets/images/Bestorq.png')"/>
          <b-card-text>
            <b-row align-h="start">
              <h4>
                <a
                  class="nounderline text-primary"
                  href="https://www.bestorq.com/"
                  target="_blank"
                >Bestorq, Inc. (Internship)</a>
              </h4>
            </b-row>
            <b-row align-h="start">
              <h5 class="text-success">May 2017 - August 2017</h5>
            </b-row>
            <b-row align-h="start">
              <h6>Lincoln, Nebraska</h6>
              <p class="text-left">During the summer of 2017, I completed an internship at Bestorq, Inc. in Lincoln, Nebraska. Bestorq is a v-belt and timing belt distributor. Bestorq's main focus aside from selling belts is quality assurance. 
                Because quality assurance is the main priority, I had the opportunity to do some embedded tasks like making small adjustments to tolerance thresholds on both belt cutting and belt measuring machines. 
                During my summer, I completed web development tasks on both their internal web application as well as an e-commerce website. 
                My main task for the summer was to create a <a target="_blank" href="https://www.bestorq.com/LGLookup.asp">lookup page</a> so customers could match their lawn and garden machine to a Bestorq belt part number. 
                Some of the main technologies used were SQL Server, ASP.NET, C#, and jQuery.</p>
            </b-row>
          </b-card-text>
        </b-card>
        <b-card bg-variant="dark" border-variant="secondary" class="mb-4" style="max-width: 50rem;">
          <b-img-lazy fluid class="mb-4" rounded :src="require('@/assets/images/WSC.png')"/>
          <b-card-text>
            <b-row align-h="start">
              <h4 class="text-primary">
                <a
                  class="nounderline"
                  href="https://www.wsc.edu/"
                  target="_blank"
                >Wayne State College</a>
              </h4>
            </b-row>
            <b-row align-h="start">
              <h5 class="text-success">B.S. in Computer Science, May 2018</h5>
            </b-row>
            <b-row align-h="start">
              <h6>Wayne, Nebraska</h6>
              <p class="text-left">I was holding a 4.0 GPA up until my senior spring semester where I was in class until noon, working part-time at Daycos, and also bartending at night. 
                I completed my B.S. at WSC with my cumulative GPA resting at 3.4.</p>
            </b-row>
          </b-card-text>
        </b-card>
        <b-card bg-variant="dark" border-variant="secondary" class="mb-4" style="max-width: 50rem;">
          <b-img-lazy fluid class="mb-4" rounded :src="require('@/assets/images/Daycos.png')"/>
          <b-card-text>
            <b-row align-h="start">
              <h4>
                <a
                  class="nounderline text-primary"
                  href="https://daycos.com/"
                  target="_blank"
                >Daycos</a>
              </h4>
            </b-row>
            <b-row align-h="start">
              <h5 class="text-success">March 2018 - August 2019</h5>
            </b-row>
            <b-row align-h="start">
              <h6>Norfolk, Nebraska</h6>
              <p class="text-left">Daycos falls into the transportation industry by offering revenue solutions to transportation companies. 
                During my time at the organization, we were on the search for additional revenue sources. 
                I was able to help develop a commercial freight product that would allow us to ensure accurate billing, exception management, and also post-audit services for carriers.</p>
              <p class="text-left">On the more technical side, developing this product involved writing a C# web API that included 21 endpoints to process new incoming shipments and provide CRUD operations for the web application. 
                The web application allowed Daycos employees to complete audits, billing, and give customers visibility as well.
                The web application utilized node.js, BootStrap, Svelte.js, PostgreSQL backend, and GraphQL on the frontend. 
                As part of this product, the API hit a very cool process that involved some computer vision and machine learning to extract data such as scale data from weight tickets.</p>
            </b-row>
          </b-card-text>
        </b-card>
        <b-card bg-variant="dark" border-variant="secondary" class="mb-4" style="max-width: 50rem;">
          <b-img-lazy fluid class="mb-4" rounded :src="require('@/assets/images/UNMC.png')"/>
          <b-card-text>
            <b-row align-h="start">
              <h4>
                <a
                  class="nounderline text-primary"
                  href="https://www.unmc.edu/"
                  target="_blank"
                >University of Nebraska Medical Center</a>
              </h4>
            </b-row>
            <b-row align-h="start">
              <h5 class="text-success">August 2019 - Present</h5>
            </b-row>
            <b-row align-h="start">
              <h6>Omaha, Nebraska</h6>
              <p class="text-left">Currently, I am working at the University of Nebraska Medical Center where I am a fully remote employee. 
                Since UNMC is part of the University of Nebraska and also working very closely with Nebraska Medicine, I get to experience and work with tons of different people and projects. 
                One day it could be making updates to an API that feeds the Nebraska Medicine Digital Front Door mobile app, working on a UNMC graduate studies internal application, or meeting with engineers from UNO, UNMC, UNL, and UNK campuses on a University-wide project. 
                With 200 unique internal applications, I have the opportunity to work on many different things. </p>
                <p class="text-left">Now for the buzz words and technical stuff. 
                  I mostly work with PHP, jQuery, and Sybase for the majority of our internal applications. 
                  But as part of a modernization initiative, I am also working with PHP in the Laravel framework with vue.js on the frontend and SQL Server 2019. 
                  I also completed MuleSoft instructor-led training and occasionally work on API integrations such as Epic MyChart and SailPoint. 
                  One of my larger accomplishments so far at UNMC was the work I completed on the COVID-19 <a target="_blank" href="https://tracker.nebraskamed.com/">Symptom Tracker</a> application. 
                  The project was developed in Laravel, BootStrap, Vue.js, PHP, and MySQL. 
                  My contribution to the project was building out an email notification symptom to remind users to track every day if they forget to track once they've started the process. 
                  A few months after project completion, this project and Nebraska Medicine's Digital Front Door were <a target="_blank" href="https://www.wsj.com/articles/rethinking-the-hospital-for-the-next-pandemic-11591652504?reflink=desktopwebshare_permalink">recognized by the Wall Street Journal</a>.</p>
            </b-row>
          </b-card-text>
        </b-card>
    </div>
    <br />
    <!--  *******************************Networking*******************************
          *********************************************************************
    *********************************************************************-->
    <div class="parallax">
    <b-row align-h="center">
      <h1 class="font-weight-bold text-white mt-4 mb-4">Stay In Touch</h1>
    </b-row>
    <b-row align-h="center" class="mb-4">
      <a href="https://github.com/typettitt" target="_blank">
        <img
          src="../assets/icons/039-github.png"
          alt="github"
          width="50px"
          height="50px"
          class="mr-4"
        />
      </a>
      <a href="https://www.linkedin.com/in/tyler-pettitt/" target="_blank">
        <img
          src="../assets/icons/031-linkedin.png"
          alt="linkedin"
          width="50px"
          height="50px"
        />
      </a>
      <b-button variant="outline-primary" class="mb-2 mt-2 ml-3" @click="openCreateModal()">
        <b-icon icon="envelope" aria-hidden="true"></b-icon> Contact
      </b-button>
    </b-row>
    <div
      class="text-white px-4"
      align="center"
      style="font-size: 10px;"
    >This projcet was built using the MEVN(MongoDB, Express, Vue, Node) stack. The entire project can be found on my github linked above.</div>
    <b-row align-h="center">
      <div class="text-white mt-2" style="font-size: 10px;">
        Icons made by
        <a
          class="nounderline"
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >Pixel perfect</a> from
        <a
          class="nounderline"
          href="https://www.flaticon.com/"
          title="Flaticon"
        >www.flaticon.com</a>
      </div>
    </b-row>
    </div>
     <!-- **************************************************** -->
    <!--*******************CONTACT FORM MODAL*******************-->
    <!-- **************************************************** -->
    <b-modal
      id="modal-contact"
      title="Contact Form"
      v-show="showCreateModal"
      @hide="cancelCreateModal"
      button-size="sm"
      hide-footer
    >
      <b-form @submit="submitCreateModalForm" @reset="resetCreateModalForm" autocomplete="off">
        <b-row>
          <b-col>
            <b-form-group id="input-group-1" label="Your Name" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="contact.name"
                type="text"
                required
                autocomplete="off"
                data-lpignore="true"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="input-group-3" label="Your Email" label-for="input-3">
              <b-form-input id="input-3" required v-model="contact.email" type="email" data-lpignore="true" autocomplete="off"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="input-group-7" label="Message" label-for="input-7">
              <b-form-textarea
                id="input-7"
                v-model="contact.message"
                placeholder="Enter your message here..."
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
  data: function(){
    return {
      contact: {
        name: "",
        email: "",
        message: "",
      },
      showCreateModal: false,
      showEditModal: false,
      showVerifyModal: false,
      console: "",
      totalCharacter: 0,
      maxcommentLength: 150,
      verifyPin: "", 
      verifySubmit: "",
    };
  },
  computed: {},
  methods: {
    charCount() {
      this.totalCharacter = this.contact.message.length;
    },
    openCreateModal() {
      this.$bvModal.show("modal-contact");
    },
    cancelCreateModal() {
      this.$bvModal.hide("modal-contact");
      this.showCreateModal = false;
      this.resetCreateModalForm();
    },
    resetCreateModalForm() {
      this.contact.name = "";
      this.contact.email = "";
      this.contact.message = "";
      this.totalCharacter=0;
    },
    submitCreateModalForm() {
      let uri = "api/contact";
      this.axios.post(uri, this.contact);
      //return false;
    },
  },
};
</script>
<style>
.parallax {
  background: url("../assets/images/bridger-range.jpg") no-repeat center center
    fixed;
  background-size: cover;
}
.link {
  color: white;
  font-size: 1.25em;
}
.link:hover {
  color: #3126d4;
}
.nounderline {
  text-decoration: none !important;
}
.circular--square {
  border-radius: 50%;
}
html,
body {
  background-color: rgb(0, 0, 0);
  font-size: 1em;
  font-family: "Roboto Slab";
  overflow-x: hidden;
}
::-webkit-scrollbar {
  display: none;
}
</style>