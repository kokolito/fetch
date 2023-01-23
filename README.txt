The github of this project: https://github.com/gitdagray/react_fetch_data_challenge .

To deploy on github:
    npm i gh-pages -D
    add the following line in the "package.json" file:
        "homepage": "https://github.com/kokolito/fetch.git",
    add the two following lines in the "package.json" file (just before the line ///"start": "react-scripts start",///):
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
    Initialise the git directory:
        git init
        git add .
        git config --global user.email "a@a.a"
        git config --global user.name "Alain"
        git add .
        git commit -m "First commit"
    Create the new repository "fetch" on github:
        …or push an existing repository from the command line
            git remote add origin https://github.com/kokolito/fetch.git
            git branch -M main
            git push -u origin main
    Go to the new website: https://github.com/kokolito/fetch.git .