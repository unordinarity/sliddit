import React, { FunctionComponent } from 'react'

import { SearchBar } from 'src/features/search'

export const Header: FunctionComponent = () => (
  <div>
    Logo
    Subreddit navigation
    <SearchBar />
    <a href='#'>Popular</a>
    <a href='#'>All</a>
    <a href='#'>Live</a>
    <a href='#'>Moderation</a>
    <a href='#'>Chat</a>
    <a href='#'>Notifications</a>
    <a href='#'>Create post</a>
    <a href='#'>Awards</a>
    Profile
  </div>
)
