import React, { useEffect, useRef } from 'react'

type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
> & { draw: (context: CanvasRenderingContext2D) => void }

const Canvas: React.FC<CanvasProps> = ({ draw, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  console.log(canvasRef)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }
    const context = canvas.getContext('2d')
    if (!context) {
      return
    }

    draw(context)

    // context.fillRect(0, 0, 100, 100)
  }, [draw])

  return <canvas width={props.width} height={props.height} ref={canvasRef} />
}

export default Canvas
