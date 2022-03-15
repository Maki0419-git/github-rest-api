# ✨ Dcard 2022 Web Frontend Intern Homework ✨

Chain the GitHub REST API and use React to implement a website that browses a single-user GitHub repository.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Website Introduction

* Enter username at Homepage's search bar to view his/her repositories.
* you will be routed to  next page with the route  `/users/{username}/repos`.
  * there will be a API call to retrieve user's repositories.
  * each request will return a list of repositories `limit to 10`.
  * scrolling to the bottom of the page , trigger the event to load next 10 repositories until no more repositories.
  * `you can even sort the result with  sort bar on the top of page.🙌🙌`
* choose the repository you want to view.
* you will be routed to  next page with the route  `/users/{username}/repos/{repo}`.
  * there will be a API call to retrieve the repository's information.

## Folder Structure

### `src`

* [assets/]
  * [img]
* [component/]
  * [Common/]
    * [Alert]
    * [Bar]
    * [Error]
    * [Header]
  * [Home/]
    * [SearchBar]
  * [Repo/]
    * [Info]
  * [RepoList/]
    * [List]
    * [SortBar]
* [customhook/]
  * [useRepoInfoAPI.js]
  * [useUserRepoAPI.js]
* [error/]
  * [handleAPIError.js]
* [page/]
  * [Home.js]
  * [NotFound.js]
  * [page.css]
  * [Repo.js]
  * [RepoList.js]
* [App.js]
* [index.js]



### Deployment

Web Page was deployed to github-pages 😊😊 : https://Maki0419-git.github.io/github-rest-api/ 

