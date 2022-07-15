function HomePage() {
  return (
    <div className="site-container">
      <div className="mt-10 mb-10 flex justify-center">
        <img className="" src="/profilePictures.png" />
      </div>
      <div className="space-y-4 antialiased">
        <h1 className="text-2xl text-center font-bold">
          Merhaba, Ben Eray Şen. Jr. Front-end geliştiriciyim.
        </h1>
        <p className="text-justify">
          1999 yılında İstanbul'da doğdum. İlkokulu Hadımköy Örfi Çetinkaya
          İÖO'da okudum. Liseyi Borusan Asım Kocabıyık Mesleki Teknik Anadolu
          Lisesi'nde Bilişim Meslek bölümünde Web Tasarım Alanında bitirdim.
          Daha ilk olarak Bursa Uludağ Üniversitesi Bilgisayar Programcılığını
          bitirdim. Sonrasında DGS ile Beykent Üniversitesi Yönetim Bilişim
          Sistemleri bölümüne tam burslu olarak geçiş yaptım ve halen okuluma
          devam etmekteyim.
        </p>
      </div>
    </div>
  )
}

export default HomePage
