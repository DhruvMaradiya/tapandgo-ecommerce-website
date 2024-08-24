import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitWebsite = () => {
    window.location = "https://www.jdinfotech.net/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dmlm6blex/image/upload/v1681535803/120334996_3700003770034378_4436746772513618963_n_qgpmvs.jpg"
              alt="Founder"
            />
            <Typography>Dhruv Maradiya</Typography>
            <Button onClick={visitWebsite} color="primary">
              Visit Website
            </Button>
            <span>
              This is a sample wesbite made by Interns. Only with the
              purpose to learn MERN Stack in the internship at JD INFOTECH
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Social Media</Typography>
            <a
              href="https://www.youtube.com/channel/UCiQCKT7DbtRRu4TeGNAWvhA"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/jd.infotech/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
