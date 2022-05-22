# Installation

## 1. Prepare project

```sh
$ npm install # install client dependencies
```

## 2. Add cloudinary preferences

- Create an account on https://cloudinary.com/
- Go to https://cloudinary.com/console/settings/upload#upload_presets
- Click `Enable unsigned uploading`
- Copy the preset name (the 8 character hash below `name`)
- Create an `.env.local` file on the outer level of your file structure (make sure it is inside your `.gitignore`)
- Add your cloudname and preset name to the `.env.local`
