module.exports = {
    async redirects() {
        return [
            {
                source: '/user',
                destination: '/',
                permanent: true,
            },
        ]
    },
    env: {
        KEY: process.env.KEY,
    },
}