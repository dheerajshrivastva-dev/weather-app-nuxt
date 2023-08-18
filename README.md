# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Nuxt Development Cycle Information
1. Public Directory and Assets
In Nuxt 3, there are two types of directories that can be used for assets.

    ### Public Directory
    If your images are located in the public/images directory, you can reference them like this:

    `<img src="/images/image1.png" />`
    ```
    Note: If you generate a static website using the Nuxt generate feature, all the asset files will be exported in the output directory.

    When you have images named 1.png, 2.png, 3.png, etc., in the public directory and you want to dynamically show these images, the require function does not work. However, you can use the following approach:
    ```

    `<img :src="``/images/${index}.png``" />`

    ### Assets Directory
    If you place files in the assets folder, they can only be accessed on the server side. If you create a static website, these files will not be exported.

    If your images are in the assets/image1.png file, you can use the following syntax:


    `<img src="~assets/image1.png" />`
    Note: The require method does not work in this case. If you need dynamic images, you should follow an approach similar to this:

    html
    Copy code
    `<img :src="``/_nuxt/${index}.png``" />`
    Creating a Static Website
    To create a static website, you can use the built-in functions provided by Nuxi.

    ```
    # Generate static website
    npx nuxi generate

    # Preview
    npx serve .output/public
    ```
    After running these commands, you can deploy the contents of the .output/public directory as your static website.

    ## GithubPages deploy
    visit this link: https://github.com/lucpotage/nuxt-github-pages