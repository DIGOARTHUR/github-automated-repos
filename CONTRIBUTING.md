<!--
# COMMIT MESSAGE

docs: update CONTRIBUTING.md

-->


# Contributing to github-automated-repos

Contribute to the library getting better and better! As a contributor, here are the guidelines we would like you to follow:


 - [Feature Requests](#feature)
 - [Submission Guidelines](#submit)
 - [Coding Rules](#rules)
 - [Commit Message Guidelines](#commit)

## Found a Bug?

If you find a bug in the source code, you can help us by [submitting an issue](#submit-issue) to our [GitHub Repository](https://github.com/DIGOARTHUR/github-automated-repos)
Even better, you can [submit a Pull Request](#submit-pr) with a fix.

## <a name="feature"></a> Missing a Feature?
You can *request* a new feature by [submitting an issue](#submit-issue) to our GitHub Repository.
If you would like to *implement* a new feature, please consider the size of the change in order to determine the right steps to proceed:

* For a **Major Feature**, first open an issue and outline your proposal so that it can be discussed.
  This process allows us to better coordinate our efforts, prevent duplication of work, and help you to craft the change so that it is successfully accepted into the project.

  **Note**: Adding a new topic to the documentation, or significantly re-writing a topic, counts as a major feature.

* **Small Features** can be crafted and directly [submitted as a Pull Request](#submit-pr).

## <a name="submit"> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue
    
You can file new issues by selecting from our [new issue templates](https://github.com/angular/angular/issues/new/choose) and filling out the issue template.


### <a name="submit-pr"> Submitting a Pull Request (PR)


Before you submit your Pull Request (PR) consider the following guidelines:

1. Search [GitHub](https://github.com/DIGOARTHUR/github-automated-repos/pulls) for an open or closed PR that relates to your submission.
   You don't want to duplicate existing efforts.

2. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add.
   Discussing the design upfront helps to ensure that we're ready to accept your work.

3. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the github-atuomated-repos.

4. In your forked repository, make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch main
     ```

5. Follow our [Coding Rules](#rules).

6. Commit your changes using a descriptive commit message that follows our [commit message conventions](#commit).
   Adherence to these conventions is necessary because release notes are automatically generated from these messages.

     ```shell
     git commit --all
     ```
    Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

7. Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

8. In GitHub, send a pull request to `github-automated-repos:main`.
    
    
### Reviewing a Pull Request

If pull requests are not accepted due to being outside the code of conduct applied in github-automated-repos, follow these procedures:
#### Addressing review feedback
    
If we ask for changes via code reviews then:

1. Make the required updates to the code.

2. Create a fixup commit and push to your GitHub repository (this will update your Pull Request):

    ```shell
    git commit --all --fixup HEAD
    git push
    ```

    For more info on working with fixup commits see [here](https://github.com/angular/angular/blob/main/docs/FIXUP_COMMITS.md).

That's it! Thank you for your contribution!
    
##### Updating the commit message

A reviewer might often suggest changes to a commit message (for example, to add more context for a change or adhere to our [commit message guidelines](#commit)).
In order to update the commit message of the last commit on your branch:

1. Check out your branch:

    ```shell
    git checkout my-fix-branch
    ```

2. Amend the last commit and modify the commit message:

    ```shell
    git commit --amend
    ```

3. Push to your GitHub repository:

    ```shell
    git push --force-with-lease
    ```

> NOTE:<br />
> If you need to update the commit message of an earlier commit, you can use `git rebase` in interactive mode.
> See the [git docs](https://git-scm.com/docs/git-rebase#_interactive_mode) for more details.
    
#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

* Check out the main branch:

    ```shell
    git checkout main -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your local `main` with the latest upstream version:

    ```shell
    git pull --ff upstream main
    ```
    
## <a name="rules"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:
    
* We follow [Airbnb JavaScript Style Guide](https://airbnb.io/javascript/react/), but wrap all code at **180 characters**.
    
## <a name="commit"></a> Commit Message Format
    
#### <a name="commit-header"></a>Commit Message Header

    
 Each commit message consists of a **header**, a **body**
    
 The `header` is mandatory and must conform to the [Commit Message Header](#commit-header) format.

The `body` is mandatory for all commits except for those of type "docs".
When the body is present it must be at least 20 characters long and must conform to the [Commit Message Body](#commit-body) format.
    
#### <a name="commit-header"></a>Commit Message Header    
```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: icons|props|hook
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.    

##### Commit types

Must be one of the following:
    
    
| Commit Type |      Description                                                                                            |  
| ----------- | --------------------------------------------
| `feat`      | A new feature                                                                                               |
| `fix`       | A bug Fix                                                                                                   | 
| `docs`      | Updates to documentation such as a the README or other markdown files                                       <!--docs: update CONTRIBUTING.md-->
| `style`     | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      | 
| `refactor`  |  A code change that neither fixes a bug nor adds a feature                                                  | 
| `perf`      | A code change that improves performance                                                                     | 
| `test`      |  Adding missing tests or correcting existing tests                                                           | 
| `build`     |  Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| `ci`        | The commit makes changes to continuous integration or continuous delivery scripts or configuration files.|
| `chore`     |  Changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies) |
| `revert`    |  Reverts a previous commit      |                                                                                 
    
        
##### Scope
The scope should be the name related to the affected area of the library (as perceived by the person reading the changelog generated by commit messages):

The following is the list of supported scopes:

* `useGithubAutomatedRepos`
* `dataReposGithub`
* `projectIcon`
* `stackIcon`
* `iGithubRepos`
    
 <!--
BUILDING CHANGELOG
There are currently a few exceptions to the "package affected area name" rule:
 -->

    
 ##### Summary

Use the summary field to provide a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end


#### <a name="commit-body"></a>Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making the change.
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.
