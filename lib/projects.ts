export type Project = {
  id: number
  title: string
  description: string
  url: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portföy ve Blog Sitesi',
    description: 'Kendi projelerimi ve yazılarımı paylaştığım dinamik bir Next.js uygulaması.',
    url: 'https://github.com/omeredebal/portfolio-blog'
  },
  {
    id: 2,
    title: 'Todo Uygulaması',
    description: 'React + TypeScript ile yapılmış görev takip uygulaması.',
    url: 'https://github.com/omeredebal/my_todolist_app'
  },
   {
    id: 3,
    title: 'Geçer Miyim?',
    description: 'Flutter ile geliştirilmiş, öğrencilere yönelik kullanıcı dostu bir not hesaplama ve takip uygulamasıdır.',
    url: 'https://github.com/omeredebal/gecermiyimapp_flutter'
  },
  {
    id: 4,
    title: 'Türkçe SMS Spam Mesaj Tespit Sistemi',
    description: 'Bu proje, Türkçe SMS mesajlarının spam olup olmadığını otomatik olarak tespit etmeyi amaçlayan bir makine öğrenmesi ve derin öğrenme uygulamasıdır.',
    url: 'https://github.com/omeredebal/Turkish-SMS-Spam-Message-Detection-Project-ML'
  },
  {
    id: 5,
    title: 'Phishing URL Tespit Aracı (CLI Tool)',
    description: 'URLleri analiz ederek phishing (oltalama) saldırılarını tespit etmeye yardımcı olan hafif, hızlı ve açık kaynaklı bir komut satırı aracıdır. Python ile geliştirilmiştir ve çeşitli URL göstergeleri kullanılarak risk puanlaması yapar.',
    url: 'https://github.com/omeredebal/phising_detector'
  },
  {
    id: 6,
    title: 'FlexTracker - Egzersiz Takip Uygulaması',
    description: 'FlexTracker, günlük egzersizlerinizi takip etmenizi ve sağlıklı bir yaşam sürdürmenizi sağlayan kullanıcı dostu bir web uygulamasıdır.',
    url: 'https://github.com/omeredebal/Flex_Trakcer'
    }

]
