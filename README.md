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

###`src`

* [assets/](.\src\assets)
  * [img/](.\src\assets\img)
    * [hero.png](.\src\assets\img\hero.png)
    * [no-data.png](.\src\assets\img\no-data.png)
    * [not-found.png](.\src\assets\img\not-found.png)
* [component/](.\src\component)
  * [Common/](.\src\component\Common)
    * [Alert/](.\src\component\Common\Alert)
    * [Bar/](.\src\component\Common\Bar)
    * [Error/](.\src\component\Common\Error)
    * [Header/](.\src\component\Common\Header)
  * [Home/](.\src\component\Home)
    * [SearchBar/](.\src\component\Home\SearchBar)
  * [Repo/](.\src\component\Repo)
    * [Info/](.\src\component\Repo\Info)
  * [RepoList/](.\src\component\RepoList)
    * [List/](.\src\component\RepoList\List)
    * [SortBar/](.\src\component\RepoList\SortBar)
* [customhook/](.\src\customhook)
  * [useRepoInfoAPI.js](.\src\customhook\useRepoInfoAPI.js)
  * [useUserRepoAPI.js](.\src\customhook\useUserRepoAPI.js)
* [error/](.\src\error)
  * [handleAPIError.js](.\src\error\handleAPIError.js)
* [page/](.\src\page)
  * [Home.js](.\src\page\Home.js)
  * [NotFound.js](.\src\page\NotFound.js)
  * [page.css](.\src\page\page.css)
  * [Repo.js](.\src\page\Repo.js)
  * [RepoList.js](.\src\page\RepoList.js)
* [App.js](.\src\App.js)
* [index.js](.\src\index.js)
* [logo.svg](.\src\logo.svg)
* [reportWebVitals.js](.\src\reportWebVitals.js)
* [setupTests.js](.\src\setupTests.js)


### Deployment

Web Page was deployed to github-pages : https://Maki0419-git.github.io/github-rest-api/ 

