/* eslint-disable no-undef */
'use client'

import { IconType } from 'react-icons'

interface CategoryBoxProps {
  icon: IconType
  label: string
  selected?: boolean
  onClick: (value: string) => void
}

export const CategoryInput: React.FC<CategoryBoxProps> = ({
  label,
  icon: Icon,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${selected ? 'border-black' : 'border-neutral-200'}
     `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  )
}
