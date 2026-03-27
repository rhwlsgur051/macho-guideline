const YoutubeEmbed = ({ videoId }: { videoId: string }) => {
  return <div>
    <iframe
      width="315" height="300"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
}

export default YoutubeEmbed;