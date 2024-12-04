import React from "react";
import Link from "next/link";
const profile = {
  data: [
    {
      url: "https://www.facebook.com/moin.ashik.5/",
      media: "Facebook",
      icon: "./Facebook Icon.png",
    },
    {
      url: "https://www.instagram.com/ashik____07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      media: "Instagram",
      icon: "./Instagram Icon.png",
    },
    {
      url: "mailto:+8801632831160",
      media: "WhatsApp",
      icon: "./WhatsApp Icon.png",
    },
  ],
};
export default function Content() {
  return (
    <div>
      <div className="m-auto h-screen">
        <h1 className="text-center  text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 py-10">
          Social Media Profile
        </h1>
        <div className="py-4 card bg-transparent backdrop-blur-sm w-96 shadow-xl m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
          <figure className="p-2">
            <div className="avatar online">
              <div className=" ring-violet-700 w-36 rounded-full ring ring-offset-2">
                <img src="https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/469099056_1358604898437456_7484984520046363455_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG2-OxVshsegaS5quWZ4EklHimhfPdwCaAeKaF893AJoFQ-D1ZFkTVQusgbYr8bFgFxTpZqP01AHy6O2v50SZO7&_nc_ohc=o0Km93QbRSwQ7kNvgHQSTB4&_nc_zt=23&_nc_ht=scontent.fdac155-1.fna&_nc_gid=A6kbaykYvCDbiJ8DJw166Wv&oh=00_AYDxigRnPoKptO52m6m2QCxZdnVHZXl64rbHxu0G_b_bmQ&oe=67559674" />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h4 className="text-center">Hi! i am </h4>
            <h2 className="animate-bounce card-title m-auto text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Moynuddin Farash
            </h2>
            <p className="text-center">Welcome to my Social Media Profile</p>
            <div className="card-actions mt-6">
              <ul className="list-none grid gap-6 w-full">
                {profile.data.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="flex gap-6 items-center justify-start justify-items-center border rounded-lg py-2 px-2"
                      href={item.url}
                      target="_blank"
                    >
                      <div className="w-10 rounded-full">
                        <img src={item.icon} />
                      </div>
                      <span>Moin on {item.media}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-base-100 text-center p-4 text-gray-600">
        <p>this site is made by Shawon Mondol Shibu</p>
      </footer>
    </div>
  );
}
