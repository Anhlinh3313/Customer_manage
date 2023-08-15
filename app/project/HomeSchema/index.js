import React from "react";
import Head from "next/head";

const HomeSchema = (props) => {
  return (
    <>
      <div>
        <Head>
          <title>
            khách hàng DIP{" "}
          </title>
          <meta
            name="description"
            content="khách hàng DIP"
          />
          <link rel="icon" href="/logo.png" />
          <link
            rel="canonical"
            href={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          />
          <meta
            name="keywords"
            content="khách hàng DIP"
          />
          <meta
            name="description"
            content="khách hàng DIP"
          ></meta>
          <meta
            name="COPYRIGHT"
            content="Copyright (C) 2007 customer-manage-dip.com"
          ></meta>
          <meta name="RATING" content="GENERAL"></meta>
          <meta name="geo.placename" content="ho chi minh"></meta>
          <meta name="robots" content="index,follow,noydir,noodp"></meta>
          <meta
            property="og:description"
            content="khách hàng DIP"
          ></meta>
          <meta
            property="og:site_name"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_NAME}`}
          ></meta>
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          ></meta>
          <meta
            property="og:title"
            content="khách hàng DIP"
          ></meta>
          <meta
            name="robots"
            content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
          ></meta>
        </Head>
      </div>
    </>
  );
};

export default HomeSchema;
