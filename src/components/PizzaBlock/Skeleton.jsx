import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="izza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="130" r="125" /> 
    <rect x="1" y="273" rx="10" ry="10" width="280" height="28" /> 
    <rect x="-2" y="315" rx="10" ry="10" width="280" height="88" /> 
    <rect x="92" y="372" rx="0" ry="0" width="2" height="0" /> 
    <rect x="5" y="422" rx="10" ry="10" width="95" height="42" /> 
    <rect x="121" y="421" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton
