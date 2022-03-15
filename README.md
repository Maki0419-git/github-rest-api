

# ✨ Dcard 2022 Web Frontend Intern Homework ✨

### 📜 Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### 📜 Website Design

Open Figma to view website design [https://www.figma.com/file/A7tIAqKmsWtwpVRd9rhmai/github-rest-api?node-id=0%3A1"]

### 📜 Website Introduction

* Enter username at Homepage's search bar to view his/her repositories.
* you will be routed to next page with the route `/users/{username}/repos`.
  * there will be a API call to retrieve user's repositories.
  * each request will return a list of repositories `limit to 10`.
  * scrolling to the bottom of the page , trigger the event to load next 10 repositories until no more repositories.
  * `you can even sort the result with sort bar on the top of page.🙌🙌`
* choose the repository you want to view.
*   you will be routed to next page with the route `/users/{username}/repos/{repo}`.
    * there will be a API call to retrieve the repository's information.



### 📜 Website Architecture



{% file src=".gitbook/assets/2022 Web Frontend Intern Homework (1).png" %}

### 📜 Folder Structure

#### `src`

```
.
│  App.js
│  index.js
│  logo.svg
│
├─assets
│  └─img
│          hero.png
│          no-data.png
│          not-found.png
│
├─component
│  ├─Common
│  │  ├─Alert
│  │  │      Alert.css
│  │  │      Alert.js
│  │  │
│  │  ├─Bar
│  │  │      Bar.css
│  │  │      Bar.js
│  │  │
│  │  ├─Error
│  │  │      Error.js
│  │  │
│  │  └─Header
│  │          Header.css
│  │          Header.js
│  │
│  ├─Home
│  │  └─SearchBar
│  │          SearchBar.css
│  │          SearchBar.js
│  │
│  ├─Repo
│  │  └─Info
│  │          Info.css
│  │          Info.js
│  │
│  └─RepoList
│      ├─List
│      │      List.css
│      │      List.js
│      │
│      └─SortBar
│              SortBar.css
│              SortBar.js
│
├─customhook
│      useRepoInfoAPI.js
│      useUserRepoAPI.js
│
├─error
│      handleAPIError.js
│
└─page
        Home.js
        NotFound.js
        page.css
        Repo.js
        RepoList.js
```

### 🔥 Deployment

Web Page was deployed to github-pages 😊😊 : https://maki0419-git.github.io/github-rest-api"
