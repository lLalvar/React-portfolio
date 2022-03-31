import React from 'react'
import styles from '../styles/MainBg.module.css'

const svg1 = (
  <div className={`${styles.svg} ${styles.svg1}`}>
    <svg
      width='207'
      height='194'
      viewBox='0 0 207 194'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M29.4038 37.1477C77.114 -20.1493 177.17 -2.96291 195.854 37.2803C215.866 80.3857 204.774 142.616 193.692 107.292L187.699 91.1802L181.143 71.4356C153.061 -8.06461 101.574 26.7884 89.6664 28.4402C34.7818 36.0535 61.0784 52.3408 37.4934 76.9101C13.9084 101.479 11.5214 140.059 29.1376 149.682C46.7539 159.305 44.8145 175.373 58.6102 180.702C72.4059 186.031 76.4019 174.289 81.0109 168.462C85.6198 162.635 128.638 163.627 75.9809 189.74C23.3235 215.853 -35.92 115.598 29.4038 37.1477Z'
        fill='#fff'
        fillOpacity='0.20'
      />
    </svg>
  </div>
)

const svg2 = (
  <div className={`${styles.svg} ${styles.svg2}`}>
    <svg
      width='434'
      height='408'
      viewBox='0 0 434 408'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M60.8671 77.504C161.136 -42.9123 371.416 -6.79307 410.68 77.7826C452.738 168.374 429.427 299.157 406.136 224.92L393.542 191.059L379.765 149.564C320.746 -17.5149 212.541 55.7327 187.516 59.2041C72.1697 75.2044 127.435 109.434 77.8684 161.069C28.3019 212.704 23.2851 293.783 60.3077 314.007C97.3304 334.231 93.2545 368.001 122.248 379.201C151.241 390.4 222.314 344.746 232 332.5C241.686 320.254 269.42 343.315 158.754 398.194C48.0888 453.073 -76.4184 242.375 60.8671 77.504Z'
        fill='#fff'
        fillOpacity='0.15'
      />
    </svg>
  </div>
)

const svg3 = (
  <div className={`${styles.svg} ${styles.svg3}`}>
    <svg
      width='762'
      height='770'
      viewBox='0 0 762 770'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M193.688 81.4163C-49.5286 240.263 -41.6283 622.213 99.5098 706.696C250.686 797.189 491.678 777.643 364.767 723.46L307.416 695.222L236.684 663.58C-47.154 529.836 99.5098 388 126.572 304.685C192.097 102.961 228.5 208 344 104C442.668 15.1564 585.309 88.3189 663.577 169.941C741.844 251.564 710.052 233.855 705.583 267.546C705.583 267.546 633.438 562.961 740.547 345.504C847.657 128.047 526.696 -136.074 193.688 81.4163Z'
        fill='#fff'
        fillOpacity='0.10'
      />
    </svg>
  </div>
)

const svg4 = (
  <div className={`${styles.svg} ${styles.svg4}`}>
    <svg
      width='1257'
      height='1135'
      viewBox='0 0 1257 1135'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M471.781 39.0749C44.0707 175.115 -101.725 747.359 73.5977 931.583C261.39 1128.91 628.323 1199.46 461.686 1066.26L387.932 1000.48L295.655 924.086C-71.8469 607.463 222.429 456.378 260 396C433.174 117.705 478.965 240.604 669.862 165.509C860.76 90.4151 1088 286 1088 286C1088 286 1211 376 1160 527.5C1160 527.5 927.982 938.286 1177.19 658.646C1426.39 379.006 1057.39 -147.188 471.781 39.0749Z'
        fill='#fff'
        fillOpacity='0.05'
      />
    </svg>
  </div>
)

const MainBg = () => {
  return (
    <>
      {svg1}
      {svg2}
      {svg3}
      {svg4}
    </>
  )
}

export default MainBg
