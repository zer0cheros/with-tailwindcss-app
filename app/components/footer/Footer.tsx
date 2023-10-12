import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div id='contact' className='w-full h-96 bg-green-700 flex justify-center items-center flex-col gap-3'>
      <h1 className='font-mono text-3 text-slate-50 text-4xl'>Get in touch!</h1>
      <h2 className='text-slate-50 text-xl'>Christian Wiss</h2>
      <h3 className='text-slate-50 text-xl'>christian.wiss@optiamaedu.fi</h3>
      <h3 className='text-slate-50 text-lg'>Kokkola, Finland</h3>
      <Link href='https://github.com/zer0cheros'><svg className='w-12 h-12' aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415 1.2 1.2 0 0 1-.167-.11 1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182zM20.737 5.377a5.39 5.39 0 0 0 .09-.42 6.278 6.278 0 0 0-.408-3.293 1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584 6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83 8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4 1 1 0 0 0 1.942.479 1.678 1.678 0 0 1 .468-.878 1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738 4.258 4.258 0 0 1 .92-2.713 3.022 3.022 0 0 1 .195-.231 1 1 0 0 0 .188-1.025 3.388 3.388 0 0 1-.155-.555 4.094 4.094 0 0 1 .079-1.616 7.543 7.543 0 0 1 2.415 1.18 1.009 1.009 0 0 0 .827.133 11.777 11.777 0 0 1 6.173.001 1.005 1.005 0 0 0 .83-.138 7.572 7.572 0 0 1 2.406-1.19 4.04 4.04 0 0 1 .087 1.578 3.205 3.205 0 0 1-.169.607 1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746 1.63 1.63 0 0 1 .466.908 3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311 4.256 4.256 0 0 0-.116-.416 6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826z"></path></svg>  </Link>
    </div>
  )
}

export default Footer