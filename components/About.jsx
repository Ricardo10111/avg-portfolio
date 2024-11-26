import MarkImg from './MarkImg'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react'
import { Quicksand } from 'next/font/google'

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Angelica Vargas',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+1 (480) 123 4567',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'a.vargasg5@hotmail.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'April 5, 1995',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'International Marketing',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Phoenix, Arizona',
  },
]

const qualificationsData = [
  {
    title: 'education',
    data: [
      {
        university: 'University of Arizona',
        qualification: 'Bachelor of Science in Marketing',
        years: '2013 - 2017',
      },
      {
        university: 'University of Arizona',
        qualification: 'Bachelor of Science in Marketing',
        years: '2013 - 2017',
      },
      {
        university: 'University of Arizona',
        qualification: 'Bachelor of Science in Marketing',
        years: '2013 - 2017',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Conssisa',
        role: 'Marketing specialist',
        years: '2013 - 2017',
      },
      {
        company: 'Wishpond',
        role: 'Director of Marketing/ Product Marketing Manager',
        years: '2013 - 2017',
      },
      {
        company: 'Junica',
        role: 'Product Marketing Manager',
        years: '2013 - 2017',
      },
    ],
  },
]

const skillsData = [
  {
    title: 'skills',
    data: [
      {
        name: 'Client communication',
      },
      {
        name: 'Marketing strategy',
      },
      {
        name: 'Project management',
      },
      {
        name: 'Social media marketing',
      },
      {
        name: 'SEO',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
    ],
  },
]

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  }

  return (
    <section id='about' className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About Me
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative'>
            <MarkImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
              imgSrc='/about/about-marketing.png'
            />
          </div>
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Unmatchet Experience in Marketing Industry with 10 Years
                      of Experience.
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      I am a marketing professional with over 10 years of
                      experience in the industry. I have a proven track record
                      of successful campaigns and projects that have helped
                      companies grow and reach their goals. I am passionate
                      about marketing and love what I do. I am always looking
                      for new challenges and opportunities to learn and grow.
                    </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        )
                      })}
                    </div>
                    {/* languages */}
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>Languages Skill</div>
                      <div className='border-b border-border'></div>
                      <div>English, Spanish</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      My awesome Journey
                    </h3>
                    {/* experience & education wraper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationsData, 'experience').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationsData, 'experience').data.map(
                            (item, index) => {
                              const { company, role, years } = item
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              )
                            },
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationsData, 'education').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationsData, 'education').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              )
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>What I Use Everyday</h3>
                    {/* skills2 */}
                    <div className='mb-16'>
                      <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* skills list */}
                      <div>
                        {getData(skillsData, 'skills').data.map(
                          (item, index) => {
                            const { name } = item
                            return (
                              <div
                                className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'
                                key={index}
                              >
                                <div className='font-medium'>{name}</div>
                              </div>
                            )
                          },
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                        Tools
                      </h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* tools list */}
                      <div className='flex gap-x-8 justify-center xl:justify-start'>
                        {getData(skillsData, 'tools').data.map(
                          (item, index) => {
                            const { imgPath } = item
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt=''
                                  priority
                                />
                              </div>
                            )
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
