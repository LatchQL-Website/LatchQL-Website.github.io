import { useEffect } from 'react';
import Prism from 'prismjs';
import ReactMarkdown from 'react-markdown';


const DocsPage = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
    return (

    <div id="docs">

      {/* -------------------Docs SideBar------------------- */}

      <aside id="docs-sidebar">
        <img id="latchql-logo" src="public/logo.png" alt=""></img>
        <ul id="docs-sidebar-container">
          <a href="#latchql">
            <li className="h1">LatchQL NPM Package</li>
          </a>
          <a href="#package-features">
            <li className="h1">Package Features</li>
          </a>
          <a href="#why-do-i-need-graphql-limiters?">
            <li className="h1">Why do I need GraphQL limiters?</li>
          </a>
          <a href="#rate-limits">
            <li className="h2">Rate Limits</li>
          </a>
          <a href="#depth-limits">
            <li className="h2">Depth Limits</li>
          </a>
          <a href="#cost-limits">
            <li className="h2">Cost Limits</li>
          </a>
          <a href="#getting-started">
            <li className="h1">Getting Started</li>
          </a>
          <a href="#latchql-playground">
            <li className="h1">LatchQL Playground</li>
          </a>
          <a href="#playground-features">
            <li className="h1">Playground Features</li>
          </a>
          <a href="#getting-started-playground">
            <li className="h1">Getting Started with Playground</li>
          </a>
          <a href="#stretch-goals">
            <li className="h1">Contribute</li>
          </a>
          <a href="#tech-stack">
            <li className="h1">Technologies</li>
          </a>

        </ul>
      </aside>

      {/* -------------------Docs Main------------------- */}

      <main id="docs-main">
        <p align="center">
          <img src="public/banner.jpg" alt="latch" />
        </p>

        <h1 id="latchql">LatchQL NPM Package</h1>
        <p className="docs-heading-ul">
            LatchQL is an open-source, free-to-use, lightweight middleware package that adds additional layers of security to authenticate/authorize and provide permissions for users to have different levels of access to a database through graphQL queries.
        </p>
        
      {/* -------------------Package Features------------------- */}

        <h1 id="package-features">Package Features</h1>
        <ul className="latchql-ol">
          <li>
           Enables users to customize depth, cost, and rate limiting for all GraphQL queries sent to the server.
          </li>
          <li>
           Authorize and customize limiting for admin, users, and non-user levels.
          </li>
          <li>
           Throw errors before execution using depth and cost limiting algorithms.
          </li>
          <li>
            Utilize a caching method with Redis for limiting the rate of user requests to your GraphQL endpoint.
          </li>
        </ul>

      {/* -------------------Why do I need GraphQL limiters?------------------- */}
  
        <h1 id="why-do-i-need-graphql-limiters?">Why do I need GraphQL limiters?</h1>
        <h2 id="rate-limits">
          Rate Limiting
        </h2>
        <p className="latchql-ol">

           Rate limiting is a strategy used for limiting network traffic and strain on the server. It's mainly used to prevent bot activity, brute force, DoS, DDoS, and web scraping attacks. By using the rate limiter, users are allocated a maximum of n operations for every fixed size 1-minute time window. Once the client has performed n operations, they must wait.
    </p>
        <h2 id="depth-limits">
          Depth Limiting
        </h2>
        <p className="latchql-ol">
        Depth limiting is vital for protecting the server against malicious query attacks. This limit is commonly used for never ending query loops that expose the endpoint to potential attacks. By using the depth limiter, you can validate the depth of imcoming queries on a user's permission level and prevent execution if it exceeds the limit.
        </p>
        <h2 id="cost-limits">
          Cost Limiting
        </h2>
        <p className="latchql-ol">
        Cost limiting is essential for securing your GraphQL endpoint. By putting a limit on the cost of a single GraphQL transaction, you can prevent resource overload by blocking excessively expensive requests. Users have the ability to define the maximum cost on specific users. If the incoming request exceeds the limit, an error will be provided as seen in the image below.
        </p>

      {/* -------------------Getting Started------------------- */}
  
        <h1 id="getting-started">Getting Started</h1>
        <p className="latchql-ol">
         
              <ol>
              <li>Install LatchQL in your terminal</li>
              <pre>
            <code className="language-sh">npm install</code>
             </pre>
           <br></br>
        <li>Create a configuration file called <code>latch_config.json</code> in your project's root directory to assign and store your limiters.
          Example: <img src="public/codeblock.png" alt=""></img>
        </li>
        <br></br>
        <li>
          Run redis server
          <pre>
          <code className="language-sh">redis-server</code>
        </pre>
        </li>
        <br></br>
        <li>
          If you get an error in step 2, you may be running an instance of redis somewhere else. To stop it:
          <pre>
          <code className="language-sh">killall redis-server</code>
        </pre>
        and then repeat step 3
        </li>
          </ol>
        </p>
      

      <h1>Implementation</h1>
      <p>To see an example of how to implement LatchQL into your project, please visit our <a href="https://github.com/oslabs-beta/LatchQL">GitHub</a>.</p>
        
      {/* -------------------GUI Features------------------- */}
  
        <h1 id="latchql-playground">
          LatchQL Playground
        </h1>
        <p>
        The LatchQL Playground is an optional, built-in playground for testing your GraphQL endpoint.
        <img className="gif" src="public/depth.gif" alt="" />
        </p>

      {/* -------------------Features------------------- */}
  
        <h1 id="playground-features">Playground Features</h1>
        <ul className="features-ul">
        <li>Preview cost and depth of your current query before execution.</li>
        <li>Diplays important metrics for tracking response time and CPU usage.</li>
        <li>Save variables to reference in the body of your GraphQL queries.</li>
        </ul>



        {/* -------------------Getting Started------------------- */}
  
        <h1 id="getting-started-playground">Getting Started with the Playground</h1>
        <p className="latchql-ol">
          <ol>
            <li>Install LatchQL npm package</li>
        <li>Clone the playground.</li>
        <li>
          Install its dependencies:
          <pre>
          <code className="language-sh">npm install --force</code>
        </pre>
        </li>
        <li>
          Build the playground:
          <pre>
          <code className="language-sh">npm run dev</code>
        </pre>
        </li>
          </ol>
        </p>

              {/* -------------------Stretch Goals------------------- */}
  
              <h2 id="stretch-goals">How to Contribute</h2>
              <p>If you would like to contribute in improving the functionality of LatchQL, please submit your ideas and/or bug fixes to our team by forking the repo and submitting your changes via a pull request.</p>
              <br></br>
              <h3>Planned Features: </h3>
        
        <ol className="stretch-goals-ol">
          <li>Storing a history of queries</li>
          <li>
          Editing user's permission level and customize individual limiters from the playground
          </li>
        </ol>

      {/* -------------------Tech Stack------------------- */}
  
        <h1 id="tech-stack">Tech Stack</h1>
        <ul className="built-with-ul">
        <li>
        <img className="gif" src="public/tech.png" alt="" />
          </li>
          {/* <li>
            <a href="https://www.typescriptlang.org/">TypeScript</a>
          </li>
          <li>
            <a href="https://reactjs.org/">React</a>
          </li>
          <li>
            <a href="https://reactrouter.com/">React Router</a>
          </li>
          <li>
            <a href="https://jestjs.io/">Jest</a>
          </li>
          <li>
            <a href="https://nodejs.org/">Node</a>
          </li>
          <li>
            <a href="https://jwt.io/">JSON Web Token (JWT)</a>
          </li>
          <li>
            <a href="https://redis.io/">Redis</a>
          </li>
          <li>
            <a href="https://expressjs.com/">Express</a>
          </li> */}
        </ul>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </main>
  
    </div>
  );
};

export default DocsPage;
