import React from 'react'
import SortSelector from './SortSelector'
import styles from './styles.module.css'

const Sorting = () => {
  return (
    <div className='w-full lg:flex hidden justify-between items-center py-3'>
      <span className={styles.properties_num}>300+ properties</span>
      <SortSelector />
    </div>
  )
}

export default Sorting