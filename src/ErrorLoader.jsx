import { Link } from "react-router-dom";
import ErrorImage from '../src/assets/error/other.jpeg';
import { useEffect, useState } from "react";
export default function ErrorLoader({image,errorMsg,statusCode}) {
  const [errorHeading,setErrorHeading] = useState('Oops! Page Not Found');
  useEffect(()=>{
    if(statusCode ==403)
      setErrorHeading("Todays API Quota Exceed");
    else if(statusCode==400)
      setErrorHeading('Invalid query parameter');
  },[statusCode])
  return (
    <main className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-950 px-4 md:px-6 py-4 rounded-lg">
      <div className="max-w-3xl flex flex-col items-center gap-6">
        <img
          alt="Error"
          className="rounded-xl overflow-hidden"
          height="400"
          src={ image || ErrorImage}
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width="600"
        />
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl"> {errorHeading} </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-[600px] md:text-xl/relaxed">
            {
                errorMsg
            }
            <br/>
            {
              (statusCode==403) && "(Todays Youtube data api quota is full you can try agian tommorow)"
            }
           
          </p>
          <Link to={'/'}
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </main>
  )
}