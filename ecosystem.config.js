module.exports = {
  apps: [
    {
      name: 'new-backoffice.contag.id',
      script: 'yarn',
      args: 'start',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        PORT: 3006,
        NODE_ENV: 'production',
      },
    },
  ],
}
