import Link from 'next/link';

function Credits() {
  return <main className='min-h-screen p-10 flex flex-col items-center'>
    <span className='block text-5xl text-center'>🙏</span>
    <h1 className='font-bold text-3xl text-center max-w-screen-sm text-blue-600'>
      Some of the website assets were made by these artists and organisations. 
    </h1>
    <p className='font-bold mb-10 mt-5'>Please consider checking out their works.</p>

    <div className='flex flex-col items-center'>
      <Link href="https://www.freepik.com/free-vector/group-discussion-concept-illustration_23985671.htm#query=discussion&position=25&from_view=search&track=sph&uuid=029edb62-618a-4c8b-a05e-696b3759d06a">Image by storyset on Freepik</Link> 
      <Link href="https://www.freepik.com/free-photo/architectural-blueprints_1120549.htm#query=blueprint%20photo&position=35&from_view=search&track=ais&uuid=9a0a53d3-2278-4c0b-b9c4-d06a337fb6dd">Image by fanjianhua</Link> on Freepik
      <Link target='_blank' href="https://undraw.co" title="illustrations by unDraw">Illustrations made by unDraw</Link>

      <Link target='_blank' href="https://www.freepik.com/free-photo/aerial-shot-twisted-roads-surrounded-by-parks-middle-city_11697935.htm#query=roads&position=0&from_view=search&track=sph&uuid=b5ab4dab-1c9d-4adb-b891-b7543860b304" title="illustrations by unDraw">Image by wirestock on Freepik</Link>
    </div>
  </main>
}

export default Credits;