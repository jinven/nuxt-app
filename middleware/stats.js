import axios from 'axios'

export default function ({ route }) {
    console.log('middleware/stats.js', `name:${route.name}, fullpath:${route.fullPath}`)
    return axios.get('https://api.github.com/repos/zeit/next.js', {
        url: route.fullPath
    })
}
