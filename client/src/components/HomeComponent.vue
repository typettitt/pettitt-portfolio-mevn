<template>
  <b-container class="px-0" fluid>
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
          After testing the waters in different majors like mechanical engineering, programming, and even the realm of healthcare, I earned my Bachelor's degree in Computer Science at Wayne State College in May of 2018. Before I graduated, I completed a summer internship at Bestorq, Inc. in Lincoln, Nebraska. At this internship, I was exposed to embedded software development where code was developed to control belt cutting and testing machines. I was also exposed to e-commerce web development. I then returned to school and accepted a job at Daycos in Norfolk, Nebraska. At Daycos I was exposed to .NET building microservices, APIs, maintaining desktop applications, and building new web applications with node.js, svelte.js, and graphQL all within the Sapper framework. I then made the move to the University of Nebraska Medical Center in Omaha, Nebraska where I currently am now. Here I work on internal web applications, backend processes such as billing and campus badge access, and also new development endeavors including moving to newer technologies like the laravel framework, CICD pipelines, API development, and git source control.        </p><p></p>
        <p>
          During my career as a software engineer, I have worked hard to maintain my status as an eternal student through instructor-led training, conferences, and self-directed learning. Looking back, I think my ability to enter every situation I come across with an open-mind and also a positive attitude is what has brought me each and every opportunity thus far. 
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
        <b-img-lazy fluid :src="require('@/assets/images/PHS.png')"/>
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
            </b-row>
          </b-card-text>
        </b-card>
        <b-card bg-variant="dark" border-variant="secondary" class="mb-4" style="max-width: 50rem;">
          <b-img-lazy fluid :src="require('@/assets/images/NECC.png')"/>
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
            </b-row>
          </b-card-text>
        </b-card>
        <b-card bg-variant="dark" border-variant="secondary" class="mb-4" style="max-width: 50rem;">
          <b-img-lazy fluid :src="require('@/assets/images/WSC.png')"/>
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
            </b-row>
          </b-card-text>
        </b-card>
        <b-card bg-variant="dark" border-variant="secondary" class="mb-4" style="max-width: 50rem;">
          <b-img-lazy fluid :src="require('@/assets/images/Bestorq.png')"/>
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
            </b-row>
          </b-card-text>
        </b-card>
        <b-card bg-variant="dark" border-variant="secondary" class="mb-4" style="max-width: 50rem;">
          <b-img-lazy fluid :src="require('@/assets/images/Daycos.png')"/>
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
            </b-row>
          </b-card-text>
        </b-card>
        <b-card bg-variant="dark" border-variant="secondary" class="mb-4" style="max-width: 50rem;">
          <b-img-lazy fluid :src="require('@/assets/images/UNMC.png')"/>
          <b-card-text>
            <b-row align-h="start">
              <h5>
                <a
                  class="nounderline text-primary"
                  href="https://www.unmc.edu/"
                  target="_blank"
                >University of Nebraska Medical Center</a>
              </h5>
            </b-row>
            <b-row align-h="start">
              <h5 class="text-success">August 2019 - Present</h5>
            </b-row>
            <b-row align-h="start">
              <h6>Omaha, Nebraska</h6>
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
  </b-container>
</template>
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
</style>
<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  computed: {},
  methods: {},
};
