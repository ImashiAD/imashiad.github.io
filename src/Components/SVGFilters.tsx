const SVGFilters = () => (
  <svg style={{ display: "none" }}>
    <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.01 0.01"
        numOctaves="6"
        seed="24"
        result="noise"
      />
      <feGaussianBlur in="noise" stdDeviation="4" result="blurred" />
      <feDisplacementMap
        in="SourceGraphic"
        in2="blurred"
        scale="70"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

export default SVGFilters;
