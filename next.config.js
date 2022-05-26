/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com", "imgur.com", "i.imgur.com", "images.emojiterra.com", "discord.com", "tailwindui.com"]
}
}

module.exports = nextConfig
