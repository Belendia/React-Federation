# React-Federation

## Micro frontend

### create the project

`pnpm create vite remote --template react`

# install a plugin for a federation

`cd remote`
`pnpm add @originjs/vite-plugin-federation -D`

# set fixed port to the remote

When the host begins, it should consistently refer to the remote using a fixed port. Thus, update the scripts in package.json with the provided code below.

`"dev": "vite --port 5001 --staticPort"`
`"preview": "vite preview --port 5001 --staticPort"`
`"serve": "vite preview --port 5001 --staticPort"`

### install all the necessary packages

`pnpm install`

### start the remote app

`pnpm run dev`
