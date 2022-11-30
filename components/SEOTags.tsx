type Props = {
  title: string
  description: string
  url: string
}

export default function SEOTags(props: Props) {
  return (
    <>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="canonical" href={props.url} />
      <meta property="og:url" content={props.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content="https://kubedir.com/og.png" />
      <meta name="twitter:site" content="@goenning" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://kubedir.com/og.png" />
    </>
  )
}
