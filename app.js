const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const cors = require("cors");
const dbPath = path.join(__dirname, "app.db");

const app = express();
app.use(express.json());
app.use(cors());
let database = null;

const initializeDbAndServer = async () => {
  try {
    database = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(process.env.PORT || 3002, () =>
      console.log("server is running at http://localhost:3002/")
    );
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

about = {
  heading: "About",
  paragraph:
    "Craig Donato is the co-founder and CEO of Oodle, a search engine for online classified listings. Prior to Oodle, Craig was CEO of Grand Central Communications, an internet service for business-to-business integration. Before joining Grand Central, Craig was a senior vice president at Excite Home where he oversaw the Excite Search and Community business units and managed Network Programming. Craig holds an MBA from Stanford Graduate School of Business and a BS in Electrical Engineering from Virginia Tech.",
};

app.get("/about", (request, response) => {
  response.send(about);
});

services = {
  heading: "Services",
  paragraph:
    "Paragraph offers a full range of integrated communication and printing services. We assist you in the development and execution in every aspect of your projects. Whether you operate in retail, cosmetics, manufacturing and distribution, financial services, the pharmaceutical industry or even in a communications agency, our team works by your side to help you achieve your goals while maximizing the effectiveness of your printed material and your communication actions.",
  imglink:
    "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663429296/pngegg_cwrvj9.png",
  services: [
    "Digital Marketing",
    "Customer-care Support",
    "Cloud Technology",
    "Data Science",
  ],
};

app.get("/services", (request, response) => {
  response.send(services);
});

portfolio = {
  heading: "Portfolio",
  paragraph:
    "When you want to attract new clients, it’s imperative that you make a great first impression. And nothing does this better than a well-crafted company portfolio. This document provides a detailed look into your company and past projects. Through a company portfolio, a prospective  client will be able to get a rough idea about your staff’s experience,  company strengths, and what is like to work with you.",
  pics: [
    "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663484209/chemistry-research-a-pipette-transferring-liquid-to-a-beaker-and-a-ball-and-stick-molecular-model-565785319-576fe71b3df78cb62c436131_ba3d2j.jpg",
    "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663584638/5-05_20best_20body_20washes_cgzut4.jpg",
    "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663483992/eyeglasses-girl-hand-over-blurred-blue-water-background-reading-glasses-plastic-frame-women-fashion-199033610_n3n8f8.jpg",
    "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663483868/four-perfume-bottles-under-flowing-water-RAMF000023_o23yrb.jpg",
    "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663483740/face-wash-cosmetic-package-tube-model-with-water-liquid-splash-3d-model-max-obj-fbx_gkmagg.jpg",
  ],
};

app.get("/portfolio", (request, response) => {
  response.send(portfolio);
});

videos = {
  heading: "Videos",
  paragraph:
    "Competition between big companies today is intense. Even the big brand names sometimes struggle to stay in the race. Telling your company story   is one of the marketing solutions that can help remind your legacy  customers about your brand, or educate and introduce it to new adopters.  The producers of this video did a wonderful job creating a company introduction video. We’re taken on a journey as they talk about the 108  glorious years of their company while showing their experience and  passion for designing furniture. To honor those 108 years they timed   this video at exactly 108 seconds.",
  videolinks: [
    "https://www.youtube.com/embed/WoaAMzG31P4",
    "https://www.youtube.com/embed/m9QpA3RrA_k",
    "https://www.youtube.com/embed/SdoQx6iIBC8",
    "https://www.youtube.com/embed/6sQmfjITgtM",
  ],
};

app.get("/videos", (request, response) => {
  response.send(videos);
});

clients = {
  heading: "Clients",
  paragraph:
    "Customer service is a series of activities designed to enhance the level of customer satisfaction – that is, the feeling that a product  or service has met the customer expectation.” It is also the process  of assisting another person or persons who buys goods and services  from a shop. It can be provided either directly by a sales or service representative or through automated means like internet sites. The latter means provides 24×7 services to customers.",
  clientimages: [
    "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663521579/spotify_k8mh_bkpkod.png",
    "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663521408/Accenture_dtxb3k.png",
    "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663521349/Infosys_Logo_pcvprn.jpg",
    "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663521291/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA_w3840-h2160-rw_r4icre.webp",
  ],
};

app.get("/clients", (request, response) => {
  response.send(clients);
});

reviews = {
  heading: "Reviews",
  comments: [
    "The Quality of work is good impeccable and amazing i love there work",
    "If you want to build a cloud-based platform, but your business has limited funds, I recommend The this company",
    "Great work!!! The team was solid, efficient and knowledgeable. They did an amazing job on my very challenging app. I will be using them again. Thank you for doing such a great job!",
    "This company succeeded in building a more manageable solution that is much easier to maintain",
  ],
  starfill:
    "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663592861/317-3174427_rating-star-single-png-transparent-png_pntieg.png",
  starnofill:
    "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663592856/128-1285607_rate-star-empty-4-star-rating-blue-hd_vqmqz5.jpg",
  pics: [
    "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663577576/104332177-Elon_Musk_smile_info3t.jpg",
    "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663577538/au6CrySufWyuM9AurXh84e_hqzmtq.jpg",
    "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663577509/photo-1494790108377-be9c29b29330_htjmks.jpg",
  ],
};

app.get("/reviews", (request, response) => {
  response.send(reviews);
});

initializeDbAndServer();
