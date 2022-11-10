import React from 'react';

const HomePage = () => {
  const svgSize = '24';

  return (
    <div id="landing-container">
      <section id="latch">
        <figure className="latch-img">
          <img id="latchql-logo" src="public/logo.png" alt="" />
        </figure>
        <main className="div-main">
          <h1>Welcome to LatchQL</h1>
          <p className="latch-subheading">
            Open-source developer tool to address GraphQL's inherent security issues.
          </p>
          <ul className="latch-ul">
            <div className="latch-li-div">
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
              <div>
                <li className="latch-li-1">Open Source</li>
                <li className="latch-li-2">
                  Free-to-use lightweight middleware package
                </li>
              </div>
            </div>
            <div className="latch-li-div">
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
              <div>
                <li className="latch-li-1">Security</li>
                <li className="latch-li-2">
                  LatchQL adds additional layers of security
                </li>
              </div>
            </div>
            <div className="latch-li-div">
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />

              <div>
                <li className="latch-li-1">Authentication and Authorization</li>
                <li className="latch-li-2">
                Provide permissions for users to have different levels of access to a database through graphQL queries.
                </li>
              </div>
            </div>
          </ul>
          <a href="https://github.com/oslabs-beta/LatchQL" target="_blank">
            <button className="latch-btn">Launch</button>
          </a>
        </main>
      </section>

      {/* -------------------- FEATURES -------------------- */}

      <section id="features">
        <main className="div-main">
          <p className="features-heading">
          Security Layer Middleware Package
          </p>
          <p className="features-subheading">
            Incorporates various technologies to account for extra layers of security for 
            developers writing GrapgQL queries. Contains wrapper methods that addresses the key aspects 
            that GraphQL fails to address out of the box. With the ability to assign access controls, 
            users are able to see and interact with the data in their API.
          </p>

          <a href="/docs">
            <button className="feature-btn">Learn More</button>
          </a>
        </main>
        {/* -------------------- FEATURES -------------------- */}
        <figure className="feature-right-side">
          {/* GUI */}
          <div class = "card">
                <div class = "image">
                <img id="latchql-logo" src="public/gui.png" alt="" ></img>
                </div>
              <div class = "content">
                <h2>Sandbox Web App</h2>
                <br></br>
               <p>Graphical user interface (GUI) to be able to 
                connect to a running instance and view query's 
                key metrics</p>
              </div>
           </div>    
          {/* Max Depth Limit */}
          <div className="feature-square">
          <div class = "card">
                <div class = "image">
                <img id="latchql-logo" src="public/shield.png" alt="" ></img>
                </div>
              <div class = "content">
                <h2>Max Depth Limit</h2>
                <br></br>
               <p>Limiting the complexity of GraphQL queries by their depth protects the server 
                against malicious query attacks that can put the resolvers in a never-ending request loop.
              </p>
              </div>
           </div>    
          </div>
          {/* Cost Limit */}
          <div className="feature-square">
          <div class = "card">
                <div class = "image">
                <img id="latchql-logo" src="public/loop.png" alt="" ></img>
                </div>
              <div class = "content">
                <h2>Cost Limit</h2>
                <br></br>
               <p>Analyze the queries and applies cost analysis algorithm to 
                prevent resource overload by blocking excessively expensive requests.
              </p>
              </div>
           </div>    
          </div>
          {/* Rate Limiter */}

          <div className="feature-square">
          <div class = "card">
                <div class = "image">
                <img id="latchql-logo" src="public/attack.png" alt="" ></img>
                </div>
              <div class = "content">
                <h2>Rate Limit</h2>
                <br></br>
               <p>Mitigate attacks from brute force attacks, DoS and DDoS attacks, and web scraping 
                attacks all while reducing strain on the server.

              </p>
              </div>
           </div>    
          </div>
          {/* Authorization Limiter */}

          <div className="feature-square">
          <div class = "card">
                <div class = "image">
                <img id="latchql-logo" src="public/auth.png" alt="" ></img>
                </div>
              <div class = "content">
                <h2>User Permission Levels</h2>
                <br></br>
               <p>Contain identity and permission that tells the server whether the 
                client is authorized for the requested resource using JWT authentication.
              </p>
              </div>
           </div>    
          </div>
                             {/* Fragments */}
      <div className="feature-square">
          <div class = "card">
                <div class = "image">
                <img id="latchql-logo" src="public/frag.png" alt="" ></img>
                </div>
              <div class = "content">
                <h2>Fragments</h2>
                <br></br>
               <p>Effectively implement reusable unit of logic that can be shared between multiple queries and mutations
              </p>
              </div>
           </div>    
          </div>
        </figure>
      </section>
      
      {/* -------------------- DEMO -------------------- */}

      <section id="demo">
        <div class="box1">
        <h1></h1>
        </div>
        <main className="div-main"></main>
        <div>
          <img className="gif" src="public/cost.gif" alt="" />
        </div>
        <div>
          <img className="gif" src="public/depth.gif" alt="" />
        </div>
        <div className="text">
          Cost Limit
          <img className="gif" src="public/rate.gif" alt="" />
        </div>
      <div class="card2" data-tilt data-tilt-scale="0.95" data-tilt-startY="40">
        <div className="text">
          Depth Limit
          <img className="gif" src="public/user.gif" alt="" />
        </div>
        </div>  
        <div className="text">
          Rate Limit
        </div>
        <div className="text">
          User Permissions
        </div>
        <figure className="div-side"></figure>
      </section>

      {/* -------------------- TEAM BIO -------------------- */}

      <section id="contact">
        <h1 className="team">The Team</h1>
        <div className="team2">

      {/* -------------------- Alex McPhail-------------------- */}

      <div class="container">
        <div class="box">
        <div class="imgBx">
          <div className="team2-member">
            <div className="team2-member-photo">
              {' '}
              <img
                className="photos"
                src="public/headshots/alex.jpeg"
                alt=""
              />
            </div>
            <div className="team2-member-name">Alex McPhail</div>
            <div className="team2-member-title">Software Engineer</div>
            <div className="team2-member-links">
              <div className="team2-member-github">
                <a href="https://github.com/mcphail-alex" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="team2-member-linkedin">
                <a
                  href="https://www.linkedin.com/in/mcphail-alex"
                  target="_blank"
                >
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_24651.png"
                    alt=""
                  />
                </a>
              </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        
          {/* -------------------- Celine Leung -------------------- */}

          <div class="container">
        <div class="box">
      <div class="imgBx">
          <div className="team2-member">
            <div className="team2-member-photo">
              {' '}
              <img
                className="photos"
                src="public/headshots/celine.png"
                alt=""
              />
            </div>
            <div className="team2-member-name">Celine Leung</div>
            <div className="team2-member-title">Software Engineer</div>
            <div className="team2-member-links">
              <div className="team2-member-github">
                <a href="https://github.com/ccelineleung" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="team2-member-linkedin">
                <a
                  href="https://www.linkedin.com/in/celineleung412/"
                  target="_blank"
                >
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_24651.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            </div>
          </div>
          </div>
          </div>

          

          {/* -------------------- Hannah Bernstein -------------------- */}

          <div class="container">
        <div class="box">
      <div class="imgBx">
          <div className="team2-member">
            <div className="team2-member-photo">
              {' '}
              <img
                className="photos"
                src="public/headshots/hannah.png"
                alt=""
              />
            </div>
            <div className="team2-member-name">Hannah Bernstein</div>
            <div className="team2-member-title">Software Engineer</div>
            <div className="team2-member-links">
              <div className="team2-member-github">
                <a href="https://github.com/hbernie" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="team2-member-linkedin">
                <a
                  href="https://www.linkedin.com/in/bernstein-hannah"
                  target="_blank"
                >
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_24651.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          </div>
            </div>
          </div>

          {/* -------------------- Johnjered Tolentino -------------------- */}

          
          <div class="container">
        <div class="box">
      <div class="imgBx">
          <div className="team2-member">
            <div className="team2-member-photo">
              {' '}
              <img
                className="photos"
                src="public/headshots/johnjered.jpeg"
                alt=""
              />
            </div>
            <div className="team2-member-name">Johnjered Tolentino</div>
            <div className="team2-member-title">Software Engineer</div>
            <div className="team2-member-links">
              <div className="team2-member-github">
                <a href="https://github.com/Johnjeredivant" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="team2-member-linkedin">
                <a
                  href="https://www.linkedin.com/in/johnjered-tolentino/"
                  target="_blank"
                >
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_24651.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
       </div>
       </div>


        {/* -------------------- Ray Kim -------------------- */}

        <div class="container">
        <div class="box">
      <div class="imgBx">
          <div className="team2-member">
            <div className="team2-member-photo">
              {' '}
              <img
                className="photos"
                src="public/headshots/ray.png"
                alt=""
              />
            </div>
            <div className="team2-member-name">
              Raymond Kim
            </div>
            <div className="team2-member-title">Software Engineer</div>
            <div className="team2-member-links">
              <div className="team2-member-github">
                <a href="https://github.com/reykeem" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="team2-member-linkedin">
                <a
                  href="https://www.linkedin.com/in/raymondhkim/"
                  target="_blank"
                >
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_24651.png"
                    alt=""
                  />
                </a>
            </div>
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>     
      </section>
    </div>
  );
};

export default HomePage;
