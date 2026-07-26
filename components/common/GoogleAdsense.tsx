const ADSENSE_PUBLISHER_ID = 'ca-pub-7340929857217862';

export default function GoogleAdsense() {
  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
      crossOrigin="anonymous"
    />
  );
}
