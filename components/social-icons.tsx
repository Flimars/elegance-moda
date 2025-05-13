import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

interface SocialIconsProps {
  size?: number
}

export default function SocialIcons({ size = 24 }: SocialIconsProps) {
  const socialLinks = [
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://twitter.com", icon: Twitter, label: "X (Twitter)" },
    { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
  ]

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label={social.label}
        >
          <social.icon size={size} />
        </Link>
      ))}
    </div>
  )
}
