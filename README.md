

# β¨ Dcard 2022 Web Frontend Intern Homework β¨

### π Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### π Website Design

Open [Figma](https://www.figma.com/file/A7tIAqKmsWtwpVRd9rhmai/github-rest-api?node-id=0%3A1") to view the website design 

### π Website Introduction

* Enter username at Homepage's search bar to view his/her repositories.
* you will be routed to next page with the route `/users/{username}/repos`.
  * there will be a API call to retrieve user's repositories.
  * each request will return a list of repositories `limit to 10`.
  * scrolling to the bottom of the page , will trigger the event to load next 10 repositories until no more repositories.
  * `you can even sort the result with sort bar on the top of page.ππ`
* choose the repository you want to view.
*   you will be routed to next page with the route `/users/{username}/repos/{repo}`.
    * there will be a API call to retrieve the repository's information.



### π Website Architecture

#### view on [google-cloud](https://drive.google.com/file/d/1as9StHbhXj-WFKjQ-DNptS3ApQ0heGnp/view?usp=sharing)
![image](https://github.com/Maki0419-git/github-rest-api/blob/master/src/assets/img/2022%20Web%20Frontend%20Intern%20Homework%20ver2.png)


### π Folder Structure

#### `src`

```
.
β  App.js
β  index.js
β  logo.svg
β
ββassets
β  ββimg
β          hero.png
β          no-data.png
β          not-found.png
β
ββcomponent
β  ββCommon
β  β  ββAlert
β  β  β      Alert.css
β  β  β      Alert.js
β  β  β
β  β  ββBar
β  β  β      Bar.css
β  β  β      Bar.js
β  β  β
β  β  ββError
β  β  β      Error.js
β  β  β
β  β  ββHeader
β  β          Header.css
β  β          Header.js
β  β
β  ββHome
β  β  ββSearchBar
β  β          SearchBar.css
β  β          SearchBar.js
β  β
β  ββRepo
β  β  ββInfo
β  β          Info.css
β  β          Info.js
β  β
β  ββRepoList
β      ββList
β      β      List.css
β      β      List.js
β      β
β      ββSortBar
β              SortBar.css
β              SortBar.js
β
ββcustomhook
β      useRepoInfoAPI.js
β      useUserRepoAPI.js
β
ββerror
β      handleAPIError.js
β
ββpage
        Home.js
        NotFound.js
        page.css
        Repo.js
        RepoList.js
```

### π₯ Deployment

#### Website was deployed to github-pages and aws πππ :

βοΈ [github-pages](https://maki0419-git.github.io/github-rest-api)\
βοΈ [aws](http://github-rest-api.s3-website-us-east-1.amazonaws.com/)
