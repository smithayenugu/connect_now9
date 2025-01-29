import connectNowImage from "./connectNow.webp";
import friends from "./friends.avif";
import post from "./post.jpg";
import chat from "./chat.jpg";
import Login from "./Login.jsx";

const Home = ({setSelectedTab}) => {
  return (
    <div className="home">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={connectNowImage}
              className="d-block mx-lg-auto img-fluid"
              alt="Connect Now"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              connectNow
            </h1>
            <p className="lead">
              ConnectNow is a social and collaborative platform focused on
              connecting users through posts, comments, and interactions. While
              it enables users to share updates, engage with content, and build
              communities. The platform emphasizes creating meaningful
              connections through text-based interactions and community-driven
              engagement.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
                onClick={() => {
                  setSelectedTab("Login");
                }}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
                onClick={() => {
                  setSelectedTab("SignUp");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-home">
        <div class="image">
          <img src={friends} />
        </div>
        <div class="content">
          <span class="title">Connect with Friends</span>

          <p class="desc">
            Reconnect with old friends and discover new ones on our vibrant
            platform. Whether it’s bonding over shared interests or exploring
            new connections, build meaningful relationships that last a lifetime
            with ease.
          </p>
        </div>
      </div>
      <div class="card-home">
        <div class="image">
          <img src={post} />
        </div>
        <div class="content">
          <span class="title">
          Share Your Post
          </span>

          <p class="desc">
          Bring your moments to life by sharing your stories, photos, and updates with friends. Whether it’s a special memory, an exciting announcement, or just a daily thought, let post..
          </p>
        </div>
      </div>
      <div class="card-home">
        <div class="image">
          <img src={chat} />
        </div>
        <div class="content">
          <span class="title">
          Chat with Your Friends
          </span>

          <p class="desc">
            Engage in seamless and real-time conversations with your friends anytime, anywhere. From casual chats to deep discussions, keep the conversation alive and stay connected with those who matter most.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
