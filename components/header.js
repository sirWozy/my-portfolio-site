import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-container py-6">
      <nav className="space-x-4 flex justify-center">
        <Link href="#">
          <a>Anasayfa</a>
        </Link>
        <Link href="#about">
          <a>Hakkımda</a>
        </Link>
        <Link href="#projects">
          <a>Projeler</a>
        </Link>
        <Link href="#contact">
          <a>İletişim</a>
        </Link>
      </nav>
    </header>
  )
}
