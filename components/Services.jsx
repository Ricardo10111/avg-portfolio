import { GanttChartSquare, Blocks, Gem } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

const services = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Project Management',
    description:
      'We provide project management services to help you manage your projects.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Market Research',
    description:
      'We provide project management services to help you manage your projects.',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Client Management',
    description:
      'We provide project management services to help you manage your projects.',
  },
]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div>
        <h2>My Services</h2>
      </div>
    </section>
  )
}

export default Services
