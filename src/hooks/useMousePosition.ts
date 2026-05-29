import { useEffect, useRef } from "react";

export interface MouseCoords {
  x: number;
  y: number;
}

export function useMousePosition(lerpFactor = 0.08) {
  const coordsRef = useRef<MouseCoords>({ x: 0, y: 0 });
  const targetRef = useRef<MouseCoords>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize x and y to range [-1, 1]
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      targetRef.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const tick = () => {
      // Perform linear interpolation (lerp)
      coordsRef.current.x += (targetRef.current.x - coordsRef.current.x) * lerpFactor;
      coordsRef.current.y += (targetRef.current.y - coordsRef.current.y) * lerpFactor;

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [lerpFactor]);

  return coordsRef;
}
