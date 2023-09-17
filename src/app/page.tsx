import { Card } from '@/components/Card'
import MyPhoto from '../../public/assets/myPhoto.jpg'

function Home() {
  return (
    <div className='flex items-center justify-center bg-primary w-full h-full'>
      <Card
        name='Rafael Pereira Cândido'
        description='Sou um desenvolvedor FullStack JavaScript com mais de um ano de experiência, apaixonado por criar soluções inovadoras em projetos. Tenho conhecimentos sólidos tanto no frontend quanto no backend, atuando em todas as etapas do ciclo de vida do projeto.'
        photo={MyPhoto}
        linkedin='https://www.linkedin.com/in/rafacandido7/'
        github='https://github.com/rafacandido7'
        instagram='https://www.instagram.com/rafa.candido/'
      />
    </div>
  )
}

export default Home