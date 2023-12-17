import Link from 'next/link';

function Credits() {
  return <main className='min-h-screen p-10 flex flex-col items-center'>
    <span className='block text-5xl text-center'>🙏</span>
    <h1 className='font-bold text-3xl text-center max-w-screen-sm text-blue-600'>
      Some of the website assets were made by these artists and organisations. 
    </h1>
    <p className='font-bold mb-10 mt-5'>Please consider checking out their works.</p>

    <div className='flex flex-col items-center'>
        <Link target='_blank' href="https://www.flaticon.com/free-icons/code" title="code icons">Code icons created by Royyan Wijaya - Flaticon</Link>

        <Link target='_blank' href="https://www.flaticon.com/free-icons/bold" title="bold icons">Bold icons created by Freepik - Flaticon</Link>

        <Link target='_blank' href="https://www.flaticon.com/free-icons/quote" title="quote icons">Quote icons created by wahya - Flaticon</Link>

        <Link target='_blank' href="https://www.flaticon.com/free-icons/pin" title="pin icons">Pin icons created by Those Icons - Flaticon</Link>

        <Link target='_blank' href="https://www.flaticon.com/free-icons/birthday" title="birthday icons">Birthday icons created by Google - Flaticon</Link>

        <Link target='_blank' href="https://www.flaticon.com/free-icons/comment" title="comment icons">Comment icons created by Freepik - Flaticon</Link>

        <Link target='_blank' href="https://www.flaticon.com/free-icons/time" title="time icons">Time icons created by Ilham Fitrotul Hayat - Flaticon</Link>

        <Link target='_blank' href="https://www.flaticon.com/free-icons/preview" title="preview icons">Preview icons created by alkhalifi design - Flaticon</Link>

        <Link target='_blank' href="https://www.flaticon.com/free-icons/fire" title="fire icons">Fire icons created by Vectors Market - Flaticon</Link>

        <Link target='_blank' href="https://www.flaticon.com/free-icons/looking" title="looking icons">Looking icons created by Good Ware - Flaticon</Link>

        <Link target='_blank' href="https://www.flaticon.com/free-icons/question" title="question icons">Question icons created by Freepik - Flaticon</Link>

        <Link target='_blank' href="https://www.flaticon.com/free-icons/help" title="help icons">Help icons created by Freepik - Flaticon</Link>

        <Link target='_blank' href="https://undraw.co" title="illustrations by unDraw">Illustrations made by unDraw</Link>

        <Link target='_blank' href="https://www.freepik.com/free-photo/aerial-shot-twisted-roads-surrounded-by-parks-middle-city_11697935.htm#query=roads&position=0&from_view=search&track=sph&uuid=b5ab4dab-1c9d-4adb-b891-b7543860b304" title="illustrations by unDraw">Image by wirestock on Freepik</Link>
    </div>
  </main>
}

export default Credits;