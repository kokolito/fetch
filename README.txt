The github of this project: https://github.com/gitdagray/react_fetch_data_challenge .

To deploy on github:
    npm i gh-pages -D
    add the following line in the "package.json" file:
        "homepage": "https://kolia.be/it/.react/fetch/",
    add the two following lines in the "package.json" file (just before the line ///"start": "react-scripts start",///):
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
    Initialise the git directory:
        git init
        git add .
        git config --global user.email "you@example.com"
        git config --global user.name "Your Name"
        git commit -m "First commit"
    