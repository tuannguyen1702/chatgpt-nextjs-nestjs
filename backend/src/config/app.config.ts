export default () => ({
    server: {
      host: process.env.APP_HOST,
      port: process.env.APP_PORT,
    },
    openai: {
      apiKey: process.env.OPENAI_KEY,
    },
  });