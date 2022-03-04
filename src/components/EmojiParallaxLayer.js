import { ParallaxLayer } from "@react-spring/parallax";

export const EmojiParallaxLayer = ({offset, speed, emoji, top, left, right, bottom}) => {
  return (
    <ParallaxLayer
    offset={offset}
    speed={speed}
    style={{
      display: "flex",
      backgroundColor: "#aff5fe",
      width: "6rem",
      height: "6rem",
      borderRadius: "50%",
      position: "relative",
      top: `${top}`,
      left: `${left}`,
      right: `${right}`,
      bottom: `${bottom}`,
      justifyContent: "center",
    }}
  >
    <p
      style={{
        placeSelf: "center",
      }}
    >
      {emoji}
    </p>
  </ParallaxLayer>
  )
}