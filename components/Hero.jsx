'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri'

// components
import MarkImg from './MarkImg'
import Badge from './Badge'
import Socials from './Socials'

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[90vh] xl:h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none '>
      <div className='container  mx-auto'>
        <div className='flex justify-between gap-x-8 '>
          {/* text */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              Marketing Specialist
            </div>
            <h1 className='h1 mb-4'>Hello, my name is Angelica Vargas</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
              I&apos;m a marketing specialist with 10+ years of experience in
              marketing, branding, and design. I&apos;m passionate about helping
              businesses grow and reach their goals.
            </p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2'>
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <a
                href='/contact/ANVG_PMM_ResumeV2.pdf'
                target='_blank' // Abre en una nueva pestaña
                rel='noopener noreferrer' // Seguridad adicional
              >
                <Button variant='secondary' className='gap-x-2'>
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>
            {/* Socilas */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconStyles='text-foreground text-[22px] hover:text-tertiary trasition-all'
            />
            {/* Badges */}
          </div>
          {/* Image */}
          <div className='hidden xl:flex relative'>
            {/* badge */}
            <Badge
              containerStyles='absolute top-[24%] -left-[8rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={10}
              badgeText='Years Of Experience'
            />
            {/* badge 2 */}
            <Badge
              containerStyles='absolute top-[80%] -left-[1rem]'
              icon={<RiTodoFill />}
              endCountText={'k'}
              endCountNum={2}
              badgeText='Finished Projects'
            />
            {/* badge 3 */}
            <Badge
              containerStyles='absolute top-[55%] -right-8'
              icon={<RiTeamFill />}
              endCountText={'k'}
              endCountNum={20}
              badgeText='Happy Clients'
            />
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            <MarkImg
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
              imgSrc='/hero/marketing.png'
            />
          </div>
        </div>
        {/* icon */}
        <div className='hidden md:flex  absolute md:left-1/2 left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <ScrollLink
            to='about'
            smooth={true}
            duration={900}
            className='cursor-pointer'
          >
            <RiArrowDownSLine className='text-3xl text-primary' />
          </ScrollLink>
        </div>
      </div>
    </section>
  )
}

export default Hero
