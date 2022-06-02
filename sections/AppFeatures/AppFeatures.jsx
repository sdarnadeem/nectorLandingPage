import React from "react";
import styles from "./AppFeatures.module.css";
import Lottie from "react-lottie";
import chat from "./json/chat.json";
import icebreaker from "./json/icebreaker.json";
import profile from "./json/profile.json";
import videocall from "./json/videocall.json";

function AppFeatures() {
  const defaultOptions = [
    {
      loop: true,
      autoplay: true,
      animationData: profile,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    {
      loop: true,
      autoplay: true,
      animationData: chat,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    {
      loop: true,
      autoplay: true,
      animationData: icebreaker,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    {
      loop: true,
      autoplay: true,
      animationData: videocall,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
  ];
  return (
    <div id="features" className={`pt-5 row ${styles.pading}`}>
      <div className="col-md-10 offset-md-1 ">
        <div className="row ">
          <div className="col-12  col-sm-4 align-self-center  d-flex align-items-center justify-content-center">
            {/* <img
              src="/images/datingNew/harth.png"
              className={styles.image}
              alt=""
            /> */}
            <div className={`w-30 h-30 ${styles.lottie}`}>
              <Lottie
                options={defaultOptions[0]}
                style={{
                  width: "70%",
                  height: "70%",
                }}
              />
            </div>
          </div>
          <div className={`col-12 col-sm-8 align-self-center  ${styles.para}`}>
            <h3>Video Bio</h3>
            <div></div>
            <p style={{ textAlign: "justify" }}>
              Unlike other dating apps, users will be swiping on a video bio of
              their potential date instead of a photo. Nectar users will create
              a video bio which can be as short or long as you want (45seconds).
              Check out some sample bios! Question prompters will pop on screen
              while you film to help you OR you can simply say ‘Hey there, it’s
              Sam here, check out my profile!’
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 offset-md-1 ">
          <div className="row ">
            <div className="col-12  col-sm-4 d-flex align-items-center justify-content-center">
              {/* <img
              src="/images/datingNew/privacy.png"
              className={styles.image}
              alt=""
            /> */}
              <div className={`w-30 h-30 ${styles.lottie}`}>
                <Lottie
                  options={defaultOptions[3]}
                  style={{
                    width: "40%",
                    height: "40%",
                  }}
                />
              </div>
              {/* <div className={`w-30 h-30  ${styles.lottie2} ${styles.lottie}`}>
                <Lottie
                  options={defaultOptions[1]}
                  style={{
                    marginBottom: "15px",
                    marginLeft: "2px",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div> */}
            </div>
            <div
              className={`col-12 col-sm-8 align-items-center ${styles.para}`}
            >
              <div
                className="row align-items-center"
                style={{ minHeight: "48vh" }}
              >
                <div className="col-12">
                  <h3>Live video</h3>

                  <p style={{ textAlign: "justify" }}>
                    Users can swipe on ‘live video’ mode with other users who
                    opt the same mode. Before the video goes live, there is an 8
                    second delay, where the user can select skip. At any point,
                    either user may leave the current chat by initiating another
                    connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-10 offset-md-1 ">
          <div className="row">
            <div className="col-12 align-items-center  col-sm-4 d-flex align-items-center justify-content-center">
              {/* <img
              src="/images/datingNew/email.png"
              className={styles.image}
              alt=""
            /> */}
              <div className={`w-30 h-30 ${styles.lottie}`}>
                <Lottie
                  options={defaultOptions[2]}
                  style={{
                    width: "65%",
                    height: "65%",
                  }}
                />
              </div>
            </div>
            <div
              className={`col-12 col-sm-8 align-items-center ${styles.para}`}
            >
              <div
                className="row align-items-center"
                style={{ minHeight: "48vh" }}
              >
                <div className="col-12">
                  <h3>Security </h3>

                  <p style={{ textAlign: "justify" }}>
                    Nectar promotes user-created and regulated community built
                    on valued and meaningful interactions and mutual respect. To
                    safeguard the integrity of the process, users must comply
                    and agree to the terms and conditions of use to all
                    functions of the application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-md-10 offset-md-1 ">
        <div className="row">
          <div className="col-12  col-sm-4 align-items-center d-flex align-items-center justify-content-center">
           
            <div className={`w-30 h-30 ${styles.lottie}`}>
              <Lottie
                options={defaultOptions[3]}
                style={{
                  width: "65%",
                  height: "65%",
                }}
              />
            </div>
          </div>
          <div className={`col-12 col-sm-8 align-items-center ${styles.para}`}>
            <div
              className="row align-items-center"
              style={{ minHeight: "48vh" }}
            >
              <div className="col-12"></div>
              <h3>About Us</h3>
              <p style={{ textAlign: "justify" }}>
                Online profiles can be so vague, and there is just so much you
                can tell through a photo of someone vacationing, with their
                mates at the bar or playing with their 4-legged friend. On
                video, you can get a better idea of the person’s total package.
                Through a video - you can get a more accurate representation of
                the person behind the profile.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default AppFeatures;
