import React from "react";
import SimpleGlobe from "./Glob";
import Button from "../../CommonComponents/Button";
import { SliderComp } from "../slider/SliderComp";
import { sliderData } from "../../Constant/Constant";
import "../slider/slider.css";
import ChatBot from "./TrailButton";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-6 col-sm-12">
            <h1 className="py-4">
              Artificial Intelligence.
              <br />
              Real Insights.
            </h1>
            <h5>
              Fenix Insight is an advanced insight engine purpose built for EOD
              operations, training and risk management. It incorporates an
              artificial intelligence system, scanning millions of online
              resources, giving an accurate global map of explosive ordnance
              risk.
            </h5>
            <div className="py-4">
              <Button>Get Started Now</Button>
            </div>
          </div>
          <div className="col-xl-6 col-md-6 col-sm-12 simple">
            <SimpleGlobe />
          </div>
        </div>
      </div>
      <div className="bgc py-5">
        <div className="main-container">
          <SliderComp slideNum={3} data={sliderData} />
        </div>
      </div>
      <ChatBot />
    </>
  );
};

export default Home;
