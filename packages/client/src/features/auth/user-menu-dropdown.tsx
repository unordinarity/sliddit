import React, { FunctionComponent, useState } from 'react'

export const UserMenuDropdown: FunctionComponent = () => {
  const [isOpened, setOpened] = useState<boolean>()

  return (
    <div>
      <div>
        <div>Username</div>
        <div>Karma</div>
      </div>

      <div>My stuff</div>
      <div>Profile</div>
      <div>Create avatar</div>
      <div>User settings</div>

      <div>View options</div>
      <div>Mod mode</div>
      <div>Night mode</div>

      <div>More stuff</div>
      <div>Create a community</div>
      <div>Coins</div>
      <div>Premium</div>
      <div>Powerups</div>
      <div>Help center</div>

      <hr />

      <div>Log out</div>
    </div>
  )
}
