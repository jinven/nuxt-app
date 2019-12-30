export default function (context) {
    console.log('middleware/auth.js', context)
    context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}
