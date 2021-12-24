# [Youtube clone built with React, Firebase, Redux toolkit, Sass](https://youtube-clone-two-omega.vercel.app/)

<img width="920" alt="darkmode_youtube_clone" src="https://user-images.githubusercontent.com/65386350/132649773-ad8f0aff-445c-4437-843b-47391345b1b4.png">

<!-- <div align="center>
<a href="https://www.emojione.com/emoji/1f410">
  <img
  width="250"
    alt="goat"
    src="https://raw.githubusercontent.com/testing-library/react-testing-library/main/other/goat.png"
  />
</a></div> -->

## Overview

Hello 👋, Welcome to my project of Youtube clone which was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template. This includes some basic functionality of Youtube, like sign-in with Google, searching videos, watching videos, get recommended videos. Guess what even the **Dark mode** is available.

Tech stack used in this project -

- JavaScript Library: **React**
- Navigation: **Reach Router**
- Authentication: **Firebase**
- State management: **Redux Toolkit**
- Styling: **Sass**
- Testing: **React testing library**, **Jest**

From one of my connections I have come across Redux Toolkit, which abstracts lot of code of Redux. I have tried it out for the first time. Also this is the first time I have used Sass with React.

I would love to refactor the project to remove whole state management from Redux toolkit and see how I can implement the same with individual components state and Context API in the future.

## Prerequisites for this project

- One should have a Firebase web app conifg ready. If you dont know how to create it please refer [Firebase](https://firebase.google.com/docs/web/setup?authuser=0)
- Since this project is powered by Youtube API, one should also have a Youtube API key ready. For any doubts please refer [Youtube Data API](https://developers.google.com/youtube/v3/docs)

## Environment Variables

Finally one should have file named `.env` with all the Firebase config and Youtube API key setup as follows

```js
// .env
REACT_APP_APIKEY = [Firebase config API key]
REACT_APP_AUTHDOMAIN = [Firebase config AuthDomain]
REACT_APP_PROJECTID = [Firebase config Project ID]
REACT_APP_STORAGEBUCKET = [Firebase config Storage bucket]
REACT_APP_MESSAGINGSENDERID = [Firebase config Messaging Sender ID]
REACT_APP_APPID = [Firebase config App Id]
REACT_APP_YOUTUBE_APIKEY = [Youtube Data API key]
```

## How to install this project

1. Clone the project using the command `git clone https://github.com/vtejaeta/youtube-clone.git`
2. Move into the file directory you wish to run using `cd {folder_name}`.
3. Use the following command `npm install` or `yarn` to install the dependencies.
4. Now you can run `npm run start` or `yarn start` to run the app in the development mode. It can be viewed in browser at `http:localhost:3000`
5. For bundling one can use `npm run build` or `yarn build` which optimises build for best performance

### Questions

For questions related to using the project, please reachout to me through

- [Twitter](https://twitter.com/vtejaeta9493)
