module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
  },
  email: {
    provider: env("EMAIL_PROVIDER"),
    providerOptions: {
      host: env("EMAIL_SMTP_HOST", "smtp.example.com"),
      port: env("EMAIL_SMTP_PORT", 587),
      auth: {
        user: env("EMAIL_SMTP_USER"),
        pass: env("EMAIL_SMTP_PASS"),
      },
    },
    settings: {
      defaultFrom: env("EMAIL_ADDRESS_FROM"),
      defaultReplyTo: env("EMAIL_ADDRESS_REPLY"),
    },
  },
});
