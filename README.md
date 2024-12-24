# interestingLSY.github.io

Hello! I am Shengyu Liu (刘胜与), a senior student in the Turing class at the School of EECS, Peking University.

This github repo is my personal homepage. You can visit it at [interestingLSY.github.io](https://interestingLSY.github.io).

Feel free to contact me at [shengyu.liu@stu.pku.edu.cn](mailto:shengyu.liu@stu.pku.edu.cn).

Feel free to steal the code and modify it to make your own homepage!

## Installation

If you want to use this template to make your own homepage, you can follow the steps below:

- Fork this repo, and rename it to `your_username.github.io`
- Clone this repo to your local machine via `git clone https://github.com/<your_username>/<your_username>.github.io.git`
- `cd <your_username>.github.io`
- `npm install` (you may need to install `npm` first)
- Modify the source code to fit your own information. You may need to modify the following files:
  - `index.html`: modify the tracker (including Google Analytics and Google Search Console verification code. If you don't need it, just comment it out), as well as the page title and meta description
  - `src/data/awards.ts`, `src/data/projects.ts`, and `src/data/publications.ts`: modify the content of the awards, projects, and publications sections.
  - `public/XXX`: replace the images/CV with your own images/CV
  - `src/views/HomeView.vue`: modify the content of the homepage and the visitor counter (you may need to register at [hits.seeyoufarm.com](https://hits.seeyoufarm.com) to get your own visitor counter)

It's all settle! Now you can execute `npm run dev` and preview your homepage at `http://localhost:3000/`.

If you want to publish your homepage online, you can execute `npm run deploy`. It will automatically build your homepage and push it to the `gh-pages` branch.

After enabling GitHub Pages in the settings of your repo, you can visit your homepage at `https://<your_username>.github.io`!

