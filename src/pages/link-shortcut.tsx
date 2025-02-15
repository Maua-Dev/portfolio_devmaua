import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const links: { path: string; redirectUrl: string }[] = [
  {
    path: 'psel-2025',
    redirectUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSfn36wXELHv42YFIK50T7vVnuaAPS0GuaSjLP9m7HIX4Tm7-g/viewform?usp=sharing'
  }
]

export function LinkShortcut() {
  const { path } = useParams()

  useEffect(() => {
    const link = links.find((link) => link.path === path)

    if (link) {
      window.location.replace(link.redirectUrl)
    } else {
      window.location.href = '/'
    }
  }, [path])

  return null
}
