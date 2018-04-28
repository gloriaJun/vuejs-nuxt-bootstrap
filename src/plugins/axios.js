import axios from 'axios'

let options = {}

// The server-side needs a full url to works
if (process.server) {
  options.baseURL = process.env.baseUrl
}

export default axios.create(options)
