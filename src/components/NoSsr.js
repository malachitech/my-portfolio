import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('../components/NoSsr.js'), { ssr: false })
 
export default function Page() {
  return (
    <div>
      <NoSSR />
    </div>
  )
}