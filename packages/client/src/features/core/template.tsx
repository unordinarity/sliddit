import React, { FunctionComponent, ReactNode } from 'react'

import { SearchBar } from 'src/features/search'

import { HeaderEmpty } from './header-empty'
import { Footer } from '../../widgets/footer'

interface Props {
  children?: never
  navigation: ReactNode
  content: ReactNode
}

export const Template: FunctionComponent<Props> = ({
  navigation,
  content,
}) => {
  return (
    <>
      <main>
        <div className='content'>
          {content}
          <section className='main'>
            Jumbo header
            Create post
            Sort filter
            Posts
          </section>
          <aside>
            About community
            Flairs
            Rules
            Description
            Moderators
            <Footer />
          </aside>
        </div>
      </main>
    </>
  )
}
