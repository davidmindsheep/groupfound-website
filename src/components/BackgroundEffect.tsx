"use client";

import { useEffect, useRef } from "react";

const VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;

  uniform float u_time;
  uniform float u_ratio;
  uniform vec2 u_pointer;
  uniform float u_scroll;

  // Simplex-style noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * snoise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / vec2(u_ratio * gl_FragCoord.w, 1.0);
    vec2 st = gl_FragCoord.xy / 800.0;

    float t = u_time * 0.15;

    // Pointer influence — soft radial glow that follows cursor
    vec2 aspect = vec2(u_ratio, 1.0);
    vec2 screenUV = gl_FragCoord.xy / vec2(gl_FragCoord.x / (gl_FragCoord.xy / gl_FragCoord.xy).x, gl_FragCoord.y / (gl_FragCoord.xy / gl_FragCoord.xy).y);

    // Normalized coordinates
    vec2 normUV = gl_FragCoord.xy;
    // We'll compute pointer distance in the JS side via uniform

    // Flowing noise layers
    float n1 = fbm(st * 1.5 + vec2(t * 0.3, t * 0.2));
    float n2 = fbm(st * 2.0 + vec2(-t * 0.2, t * 0.4) + 5.0);
    float n3 = fbm(st * 0.8 + vec2(t * 0.1, -t * 0.15) + 10.0);

    // Scroll influence — shift the color balance
    float scrollInfluence = u_scroll * 0.5;

    // Brand colors
    vec3 orange = vec3(0.961, 0.486, 0.0);    // #F57C00
    vec3 blue   = vec3(0.129, 0.588, 0.953);   // #2196F3
    vec3 dark   = vec3(0.02, 0.02, 0.03);      // #050508
    vec3 burnt  = vec3(0.749, 0.357, 0.016);   // #BF5B04

    // Mix colors based on noise
    float blend1 = n1 * 0.5 + 0.5;
    float blend2 = n2 * 0.5 + 0.5;

    vec3 warm = mix(orange, burnt, blend1);
    vec3 cool = mix(blue, orange * 0.3, blend2);

    // Combine with position and scroll
    float posMix = sin(st.x * 2.0 + t + scrollInfluence) * 0.5 + 0.5;
    vec3 color = mix(warm, cool, posMix + n3 * 0.3);

    // Pointer glow
    vec2 pointerDist = (gl_FragCoord.xy / 800.0) - u_pointer;
    pointerDist.x *= u_ratio;
    float glow = exp(-dot(pointerDist, pointerDist) * 2.0);
    color += mix(orange, blue, sin(t * 2.0) * 0.5 + 0.5) * glow * 0.4;

    // Darken significantly — this is a subtle background
    color = mix(dark, color, 0.12 + glow * 0.08);

    // Slight vignette
    vec2 center = gl_FragCoord.xy / 800.0;
    center.x *= u_ratio;
    float vig = 1.0 - dot(center - vec2(u_ratio * 0.5, 0.5), center - vec2(u_ratio * 0.5, 0.5)) * 0.15;
    color *= vig;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
    if (!gl) return;

    // Compile shaders
    function createShader(type: number, source: string) {
      const shader = gl!.createShader(type)!;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error(gl!.getShaderInfoLog(shader));
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = createShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Full-screen quad
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPosition = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const uTime = gl.getUniformLocation(program, "u_time");
    const uRatio = gl.getUniformLocation(program, "u_ratio");
    const uPointer = gl.getUniformLocation(program, "u_pointer");
    const uScroll = gl.getUniformLocation(program, "u_scroll");

    // State
    let pointer = { x: 0.5, y: 0.5 };
    let smoothPointer = { x: 0.5, y: 0.5 };
    let scrollProgress = 0;
    let animId = 0;

    const onMouseMove = (e: MouseEvent) => {
      pointer.x = e.clientX / window.innerHeight;
      pointer.y = 1.0 - e.clientY / window.innerHeight;
    };

    const onScroll = () => {
      const container = document.getElementById("snap-container");
      if (container) {
        scrollProgress = container.scrollTop / (container.scrollHeight - container.clientHeight);
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5); // cap for performance
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", resize);
    const container = document.getElementById("snap-container");
    container?.addEventListener("scroll", onScroll);
    resize();

    const startTime = performance.now();

    const render = () => {
      const elapsed = (performance.now() - startTime) / 1000;

      // Smooth pointer
      smoothPointer.x += (pointer.x - smoothPointer.x) * 0.05;
      smoothPointer.y += (pointer.y - smoothPointer.y) * 0.05;

      gl.uniform1f(uTime, elapsed);
      gl.uniform1f(uRatio, canvas.width / canvas.height);
      gl.uniform2f(uPointer, smoothPointer.x, smoothPointer.y);
      gl.uniform1f(uScroll, scrollProgress);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      container?.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}
