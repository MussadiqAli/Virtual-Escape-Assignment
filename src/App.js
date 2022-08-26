import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="topNav">
            <img src="./assets/logo2.png" className="img-fluid " />
            <div className="topRight">
              <button className="btnCon me-3">6 Connected</button>
              <button className="btnCon">Logout</button>
            </div>
          </div>
          <div className="experios">
            <p>Echo Bravo Charlie, we have lift off.</p>
            <p>
              We've just received a distress signal from an botanist named
              Louis, who is carrying out research on a remote island. According
              to the local weather reports, a cyclone is about to hit the
              island, potentially destroying everything in its path.
            </p>
            <p>
              Most people have already made it to safety, but this stubborn man
              refused to leave his work behind.{" "}
            </p>
            <p>
              It is our task to rescue him and bring him and his valuable work
              back to safety.
            </p>{" "}
            <p>
              With the power down, there's no way to get in touch, so I'm not
              sure what to expect.
            </p>{" "}
            <p>
              I'm currently flying towards one of the islands that he was last
              known to visit and could really use you help. Let's work together
              and rescue him, before the cyclone hits the island.
            </p>
            <div className="overview">
              <img src="./assets/clock.png" className="img-fluid me-3" />
              <div>
                <p className="bold">Overview</p>
                <p>
                  You’ll have 60 minutes to help captain Roger on his adventure
                  to save the botanist. The time starts counting down as soon as
                  anyone presses Start Game on the next screen. You can continue
                  playing if you don't make it within 60 minutes, but won't get
                  a spot on the leaderboard.
                </p>
                <p>
                  {" "}
                  For each challenge you can use Google or any other website to
                  find answers.
                </p>
              </div>
            </div>
            <div className="overview">
              <img src="/assets/two-men.png" className="img-fluid me-3" />
              <div>
                <p className="bold">Teamwork</p>
                <p>
                  To be successful, you'll need to work closely together. Make
                  sure you have set up a video call in case you are not
                  physically together. You can use Zoom, Teams, The Pub Hub or
                  any other app you'd like. Only 1 person in the team needs to
                  submit an answer or request a hint. Before submitting an
                  answer or requesting a hint, first discuss with your team if
                  everyone agrees. After a few seconds everyone will see the
                  result.
                </p>
              </div>
            </div>
            <div className="overview mb-3">
              <img src="/assets/x-mark.png" className="img-fluid me-3" />
              <div>
                <p className="bold">Penalties</p>
                <p>
                  You can get help in case you’re stuck. Simply press the
                  Request Hint button. Once you've requested a hint, a counter
                  shows you when your next hint becomes available. Requesting a
                  hint results in a 30 second time penalty. Submitting an
                  incorrect answer also results in a 30 second time penalty.
                </p>
              </div>
            </div>
            <div className=" text-center">
              <button className="btnCustom">
                CONTINUE <span className="fs-5">&#8594;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
