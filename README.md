# Revolting

Generate dictatorial propapaganda speeches about any chosen topic.

Written with React, Vite and Netlify Functions.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/addictedtolearning/revolting)

# Prerequisites

Install [Node](https://nodejs.org/en/download) (tested with v18.16.0) and [Netlify CLI](https://docs.netlify.com/cli/local-development/)

Then install dependencies.

```sh
npm install
```

You will need an OpenAI key. To enter this, you can first create the .env file:

 ```sh
 cp .env.sample .env
 ```

 And then insert your OpenAI key into the .env file.

> [!WARNING]
> This project does not provide rate limiting.
> Ensure that you have a budget limit and rate limit set in OpenAI.
> It is a good idea to use a separate project with its own limit.

# Launching

```sh
npm run dev
```

This will launch the Vite development server (for the React client) and the Netlify dev server simultaneously.