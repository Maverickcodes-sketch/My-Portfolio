import React from 'react'
import { Mail, Linkedin, Github, Instagram, Code } from 'lucide-react'

function Toast() {
  const socials = [
    {
      name: 'Email',
      icon: Mail,
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=mishrashaswat29@gmail.com',
      color: 'text-red-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/shaswat-mishra-320863252?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHoK1bvMoTISBvCG59Yik7g%3D%3D',
      color: 'text-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Maverickcodes-sketch',
      color: 'text-gray-800'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/just_a_maverick_',
      color: 'text-pink-500'
    },
    {
      name: 'LeetCode',
      icon: Code,
      url: 'https://leetcode.com/u/_Shaswat_Mishra/',
      color: 'text-yellow-500'
    }
  ]

  return (
    <div className="toast toast-end gap-4 font-stretch-50% font-mono font-semibold">
      {socials.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
            title={social.name}
          >
            <Icon className={`w-6 h-6 ${social.color}`} />
            <span className="text-white text-sm font-medium">{social.name}</span>
          </a>
        )
      })}
    </div>
  )
}

export default Toast