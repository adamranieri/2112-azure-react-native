# Git 
### Everything you ever wanted to know about git but were too afraid to ask

- What is git?  
    - It is a Version Control System
    - It is designed to track files and updates to files
- Why does it exist?
    - Software projects are essentially just text files being edited and created.
    - It is very helpful to track these files and their edits while bulding large applications
    - You do not lose code
    - You can easily view previous version of your code
    - Multiple people can work on different files simultaneously and then merge them together
- What is GitHub
    - *IT IS NOT GIT*
    - GitHub is like a library 
    - It will hold **Repositories**
    - competitors
        - GitLab
        - Almost all the cloud providers have their own version of github
- Key Terminology
    - **Repository**
        - Just a folder that stores files/ other folders
        - **Remote Repository**
            - The folder containing all the files hosted online
            - This is readily accessible by anyone
        - **Local Reposiory**
            - A local folder containing the repo files created when you ***clone*** that repository
        - ***They are not MAGICALLY linked together***
- Key Files
    - **README.md**
        - A file with information about the repo
    - **.gitignore**
        - a file that lists folders/files to NOT include in the ***remote*** repository
            - files that contain sensitive information
            - libraries and dependencies
- File statuses
    - **Untracked**
        - A file exists in the local repository but NOT the remote repository
    - **added**
        - The file is now tracked by the local repository
    - **modified**
        - The has been edited from the last commit

- Key commands
    - **Clone**
        ```bash
        git clone something.git
        ```
        - make a local copy of the remote repository
    - **add**
        - will *add* untracked files in your *local* repo to the repo history
            - This does ***NOT*** impact the remote repo immediately
            - Telling git in the local reposiotry to watch these files
        ```bash
        git add .
        ```
        - Necessary to tell git what files to look at for the next commit
            - . for all files
    - **commit**
        - You are **saving** a particular snapshot of your files and the text within them
        - If this is a video game commit is like making a save
            - It is a particular state you could go back to
        - This does ***not*** impact the remote repo immediately
        ```bash
        git commit -m "some message describing what you did"
        ```
    - **push**
        - You are **pushing** the local snapshot of your local files to the ***Remote Repository***
        - will actually affect the remote repository
        ```bash
        git push
        ```
# Continual Integeration CI
- Is the devlopment process whereby a developer(s) use a remote reposity and source control software to track version history
- 21st century is veru much into CI
- Continual Integration is all about getting code ***IN*** to a central/remote repository
- Often the central repo will 
    - Run tests on the code
    - Have environment variables set up
    - Quality control gates
        - merge requests
        - code linters like sonar cloud
- As much of it should be automated as possible
    - Easier on developers
    - Faster feeback